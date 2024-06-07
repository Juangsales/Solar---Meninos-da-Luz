"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

import { addForm, addField, removeForm, removeField } from './formManager.js';
import { saveForm, addData, loadSavedForms, loadFormFields } from './dataManager.js';

window.addForm = addForm;
window.addField = addField;
window.removeForm = removeForm;
window.removeField = removeField;
window.saveForm = saveForm;
window.addData = addData;
window.loadSavedForms = loadSavedForms;
window.loadFormFields = loadFormFields;

window.onload = loadSavedForms;
