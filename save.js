#target photoshop
//
// Save.js
//

//
// Generated Wed Dec 21 2016 15:16:23 GMT-0500
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
// save
//
//
//==================== Save ==============
//
function Save() {
  // Save
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putEnumerated(sTID("PNGInterlaceType"), sTID("PNGInterlaceType"), sTID("PNGInterlaceNone"));
    desc2.putEnumerated(sTID("PNGFilter"), sTID("PNGFilter"), sTID("PNGFilterAdaptive"));
    desc2.putInteger(cTID('Cmpr'), 9);
    desc1.putObject(cTID('As  '), sTID("PNGFormat"), desc2);
    desc1.putPath(cTID('In  '), new File("~/Desktop"));
    desc1.putInteger(cTID('DocI'), 413);
    desc1.putBoolean(cTID('Cpy '), true);
    executeAction(cTID('save'), desc1, dialogMode);
  };

  step1();      // Save
};

// EOF

"Save.js"
// EOF
