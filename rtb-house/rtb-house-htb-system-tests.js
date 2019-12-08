'use strict';

function getPartnerId() {
    return 'RTBHouseHtb';
}

function getCallbackType() {
    return 'NONE';
}

function getArchitecture() {
    return 'SRA';
}

function getStatsId() {
    return 'RTB';
}



module.exports = {
    getPartnerId: getPartnerId,
    getStatsId: getStatsId,
    // getBidRequestRegex: getBidRequestRegex,
    getCallbackType: getCallbackType,
    getArchitecture: getArchitecture,
    getConfig: getConfig,
    // getPassResponse: getPassResponse,
    // validateBidRequest: validateBidRequest,
    // getValidResponse: getValidResponse,
    // validateTargeting: validateTargeting
};
