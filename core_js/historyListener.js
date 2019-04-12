/*
* ClearURLs
* Copyright (c) 2017-2019 Kevin Röbert
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU Lesser General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU Lesser General Public License for more details.
*
* You should have received a copy of the GNU Lesser General Public License
* along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/*jshint esversion: 6 */
/*
* This script is responsible for listen on history changes.
* This technique is often used to inject tracking code into the location bar,
* because all feature events will use the updated URL.
*/

function historyListenerStart() {
    if(storage.historyListenerEnabled) {
            browser.webNavigation.onHistoryStateUpdated.addListener(historyCleaner);
    }
}

/**
* Function that is triggered on history changes. Injects script into page
* to clean links that were pushed to the history stack with the
* history.pushState method.
* @param  {state object} details The state object is a JavaScript object
* which is associated with the new history entry created by pushState()
*/
function historyCleaner(details) {
    var urlBefore = details.url;
    var urlAfter = pureCleaning(details.url);

    if(urlBefore != urlAfter) {
        browser.tabs.executeScript(details.tabId, {
            frameId: details.frameId,
            code: 'history.pushState({state: "cleaned_history"},"",'+JSON.stringify(urlAfter)+');'
        }).then(() => {}, onError);
    }
}

function onError(error) {
    console.log(`[ClearURLs] Error: ${error}`);
}