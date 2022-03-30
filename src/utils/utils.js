export const showBusyIndicator =  () => {
    if (document.getElementById('busy-indicator') !== null) {
        document.getElementById('busy-indicator').style.display = "block";
    }
};

export const hideBusyIndicator = ()=> {
    if (document.getElementById('busy-indicator') !== null) {
        document.getElementById('busy-indicator').style.display = "none";
    }
};