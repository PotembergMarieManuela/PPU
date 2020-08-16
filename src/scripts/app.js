("use strict");

import nav from "./nav";
import activeSection from "./activeSection.js";
import demo from "./demo.js";
import dictionnary from "./dictionnaryGenerator";

// NAVIGATION //
nav(".button__nav", ".nav-list");

// ACTIVE SECTION //

activeSection();

// DEMO //

demo();

// DICTIONNARY - FILTER//

dictionnary();