document.addEventListener('contextmenu', (e) => e.preventDefault());
function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
 
    return false;
};

document.addEventListener("keydown", function (e) {
    if (e.ctrlKey &&
      (e.keyCode == "61" ||
        e.keyCode == "107" ||
        e.keyCode == "173" ||
        e.keyCode == "109" ||
        e.keyCode == "187" ||
        e.keyCode == "189")
    ) {
      e.preventDefault();
    }
  });
  document.addEventListener(
    "wheel",
    function (e) {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    },
    {
      passive: false
    }
  );