var jira_domain = ( function () {
	return {
		storeJiraDomain: function (msg, sendResponse) {
			if(msg.type == "set_domain") {
				chrome.storage.sync.set({"user_jira_domain": msg.user_domain});
				CURRENT_USER_DOMAIN = msg.user_domain;
				sendResponse({ type:"Success" });
			}
		},
		fetchJiraDomain: function (sendResponse) {
			sendResponse({type: "Success", user_domain: this.getJiraDomain()});
		},
        getJiraDomain: function () {
        	if(!CURRENT_USER_DOMAIN) {
        		chrome.storage.sync.get("user_jira_domain", function (values) {
        			CURRENT_USER_DOMAIN = 
        				(values.user_jira_domain == undefined) ? "" : values.user_jira_domain;
        		});
        	}
        	return CURRENT_USER_DOMAIN;
        }
	};
})();