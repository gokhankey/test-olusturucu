const storageKey = "soru-sinav-atolyesi-draft-v2";

const state = {
  examKind: "written",
  questions: [],
  pdfs: [],
  sections: [{ id: "default-section", start: 0, title: "", resetNumbering: false, newPage: false }],
  currentPdfId: null,
  pdfScale: 1.35,
  docZoom: 1,
  isSelecting: false,
  selection: null,
  selectedAnswer: "",
  gapTarget: "global",
  gapQuestionId: null,
  splitQuestionId: null,
  splitIndex: null,
  drawingTool: "segment",
  drawingDown: false,
  drawingStart: null,
  drawingTextArmed: false,
  imageTarget: "question",
  settings: {
    accentColor: "#0f2f57",
    globalGap: 0,
    margins: { top: 1.5, bottom: 1.5, left: 1.5, right: 1.5 },
    watermark: { enabled: false, text: "", opacity: 20, size: 90, angle: 45, color: "#000000" },
  },
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const els = {
  modeTabs: $$(".mode-tab"),
  navItems: $$(".nav-item[data-nav]"),
  cropBadge: $("#cropBadge"),
  basicPanel: $("#basicPanel"),
  advancedPanel: $("#advancedPanel"),
  advancedToggleBtn: $("#advancedToggleBtn"),
  advancedDoneBtn: $("#advancedDoneBtn"),
  quickSaveBtn: $("#quickSaveBtn"),
  testTitle: $("#testTitle"),
  schoolName: $("#schoolName"),
  writtenType: $("#writtenType"),
  descriptionField: $("#descriptionField"),
  className: $("#className"),
  groupName: $("#groupName"),
  questionGapToggle: $("#questionGapToggle"),
  teacherOption: $("#teacherOption"),
  answerKeyOption: $("#answerKeyOption"),
  includeTeacher: $("#includeTeacher"),
  includeAnswerKey: $("#includeAnswerKey"),
  includeOptic: $("#includeOptic"),
  preparePaperBtn: $("#preparePaperBtn"),
  smartLayout: $("#smartLayout"),
  watermarkToggle: $("#watermarkToggle"),
  paperColor: $("#paperColor"),
  paperSize: $("#paperSize"),
  orientation: $("#orientation"),
  columnCount: $("#columnCount"),
  marginPreset: $("#marginPreset"),
  customMarginsBtn: $("#customMarginsBtn"),
  otherSettingsBtn: $("#otherSettingsBtn"),
  marginTopLabel: $("#marginTopLabel"),
  marginBottomLabel: $("#marginBottomLabel"),
  marginLeftLabel: $("#marginLeftLabel"),
  marginRightLabel: $("#marginRightLabel"),
  questionGrid: $("#questionGrid"),
  emptyState: $("#emptyState"),
  chooseDeviceBtn: $("#chooseDeviceBtn"),
  openCropBtn: $("#openCropBtn"),
  openEditorBtn: $("#openEditorBtn"),
  restoreDraftBtn: $("#restoreDraftBtn"),
  floatingDock: $("#floatingDock"),
  loadedCountText: $("#loadedCountText"),
  dockAddBtn: $("#dockAddBtn"),
  dockClearBtn: $("#dockClearBtn"),
  dockSaveBtn: $("#dockSaveBtn"),
  pdfInput: $("#pdfInput"),
  mediaInput: $("#mediaInput"),
  packageInput: $("#packageInput"),
  imageInput: $("#imageInput"),
  cropStartModal: $("#cropStartModal"),
  cropStartDrop: $("#cropStartDrop"),
  cropStartInput: $("#cropStartInput"),
  pdfModal: $("#pdfModal"),
  pdfSelect: $("#pdfSelect"),
  pdfSettingsBtn: $("#pdfSettingsBtn"),
  pdfModalInput: $("#pdfModalInput"),
  closePdfBtn: $("#closePdfBtn"),
  pdfViewer: $("#pdfViewer"),
  pdfCanvasWrap: $("#pdfCanvasWrap"),
  pdfCanvas: $("#pdfCanvas"),
  pdfOverlayLayer: $("#pdfOverlayLayer"),
  selectionBox: $("#selectionBox"),
  selectionConfirm: $("#selectionConfirm"),
  confirmCropBtn: $("#confirmCropBtn"),
  prevPdfPageBtn: $("#prevPdfPageBtn"),
  nextPdfPageBtn: $("#nextPdfPageBtn"),
  pdfPageSelect: $("#pdfPageSelect"),
  pdfQuestionTotal: $("#pdfQuestionTotal"),
  uploadPdfQuestionsBtn: $("#uploadPdfQuestionsBtn"),
  gapModal: $("#gapModal"),
  gapSelect: $("#gapSelect"),
  gapCustomWrap: $("#gapCustomWrap"),
  gapCustomValue: $("#gapCustomValue"),
  gapValueLabel: $("#gapValueLabel"),
  gapFirstNo: $("#gapFirstNo"),
  gapSecondNo: $("#gapSecondNo"),
  gapOkBtn: $("#gapOkBtn"),
  gapCancelBtn: $("#gapCancelBtn"),
  splitModal: $("#splitModal"),
  splitBeforeName: $("#splitBeforeName"),
  splitAfterName: $("#splitAfterName"),
  splitBeforeRange: $("#splitBeforeRange"),
  splitAfterRange: $("#splitAfterRange"),
  splitResetNumber: $("#splitResetNumber"),
  splitNewPage: $("#splitNewPage"),
  splitOkBtn: $("#splitOkBtn"),
  splitCancelBtn: $("#splitCancelBtn"),
  otherSettingsModal: $("#otherSettingsModal"),
  watermarkModal: $("#watermarkModal"),
  watermarkText: $("#watermarkText"),
  wmOpacity: $("#wmOpacity"),
  wmSize: $("#wmSize"),
  wmAngle: $("#wmAngle"),
  wmColor: $("#wmColor"),
  wmOpacityLabel: $("#wmOpacityLabel"),
  wmSizeLabel: $("#wmSizeLabel"),
  wmAngleLabel: $("#wmAngleLabel"),
  watermarkOkBtn: $("#watermarkOkBtn"),
  marginsModal: $("#marginsModal"),
  marginTop: $("#marginTop"),
  marginBottom: $("#marginBottom"),
  marginLeft: $("#marginLeft"),
  marginRight: $("#marginRight"),
  marginsOkBtn: $("#marginsOkBtn"),
  editorModal: $("#editorModal"),
  closeEditorBtn: $("#closeEditorBtn"),
  toolsMenuBtn: $("#toolsMenuBtn"),
  toolsDropdown: $("#toolsDropdown"),
  insertEquationBtn: $("#insertEquationBtn"),
  openDrawingBtn: $("#openDrawingBtn"),
  wordCountBtn: $("#wordCountBtn"),
  questionEditor: $("#questionEditor"),
  editorFont: $("#editorFont"),
  editorSize: $("#editorSize"),
  insertImageBtn: $("#insertImageBtn"),
  insertTableBtn: $("#insertTableBtn"),
  insertSigmaBtn: $("#insertSigmaBtn"),
  insertOmegaBtn: $("#insertOmegaBtn"),
  insertSymbolBtn: $("#insertSymbolBtn"),
  editorQuestionType: $("#editorQuestionType"),
  uploadEditorQuestionBtn: $("#uploadEditorQuestionBtn"),
  drawingModal: $("#drawingModal"),
  drawingCanvas: $("#drawingCanvas"),
  drawingHint: $("#drawingHint"),
  moreDrawingBtn: $("#moreDrawingBtn"),
  moreDrawingModal: $("#moreDrawingModal"),
  closeMoreDrawingBtn: $("#closeMoreDrawingBtn"),
  insertDrawingBtn: $("#insertDrawingBtn"),
  closeDrawingBtn: $("#closeDrawingBtn"),
  documentModal: $("#documentModal"),
  closeDocumentBtn: $("#closeDocumentBtn"),
  finalPaper: $("#finalPaper"),
  docName: $("#docName"),
  docZoomOutBtn: $("#docZoomOutBtn"),
  docZoomFitBtn: $("#docZoomFitBtn"),
  docZoomInBtn: $("#docZoomInBtn"),
  downloadDocBtn: $("#downloadDocBtn"),
  docPageStatus: $("#docPageStatus"),
  docInfoLine: $("#docInfoLine"),
  sideDownloadBtn: $("#sideDownloadBtn"),
  sideEmailBtn: $("#sideEmailBtn"),
  sidePdfEmailBtn: $("#sidePdfEmailBtn"),
  emailModal: $("#emailModal"),
  emailTo: $("#emailTo"),
  emailSubject: $("#emailSubject"),
  emailMessage: $("#emailMessage"),
  emailFileName: $("#emailFileName"),
  emailShareBtn: $("#emailShareBtn"),
  emailAppBtn: $("#emailAppBtn"),
  imagePreviewModal: $("#imagePreviewModal"),
  previewImage: $("#previewImage"),
  toast: $("#toast"),
};

const pdfCtx = els.pdfCanvas.getContext("2d");
const drawCtx = els.drawingCanvas.getContext("2d");

function init() {
  if (window.pdfjsLib) {
    window.pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
  }

  bindEvents();
  applyExamMode();
  renderQuestionGrid();
  updateBadges();
  redrawDrawingCanvas();
  refreshIcons();
}

function bindEvents() {
  els.modeTabs.forEach((button) => {
    button.addEventListener("click", () => {
      state.examKind = button.dataset.examKind;
      applyExamMode();
    });
  });

  els.navItems.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.nav === "crop") openCropTool();
      if (button.dataset.nav === "editor") openEditor();
    });
  });

  els.advancedToggleBtn.addEventListener("click", showAdvancedPanel);
  els.advancedDoneBtn.addEventListener("click", showBasicPanel);
  els.quickSaveBtn.addEventListener("click", saveLocalDraft);
  els.restoreDraftBtn.addEventListener("click", () => openFilePicker(els.packageInput));
  els.openCropBtn.addEventListener("click", openCropTool);
  els.openEditorBtn.addEventListener("click", openEditor);
  els.preparePaperBtn.addEventListener("click", openDocumentPreview);
  els.dockAddBtn.addEventListener("click", () => openFilePicker(els.mediaInput));
  els.dockClearBtn.addEventListener("click", clearAllQuestions);
  els.dockSaveBtn.addEventListener("click", exportQuestionPackage);

  els.pdfInput.addEventListener("change", (event) => loadPdfFiles(event.target.files));
  els.mediaInput.addEventListener("change", handleMediaFiles);
  els.cropStartInput.addEventListener("change", handleCropStartFiles);
  els.pdfModalInput.addEventListener("change", (event) => loadPdfFiles(event.target.files, true));
  els.packageInput.addEventListener("change", importQuestionPackage);
  els.imageInput.addEventListener("change", importImagesAsQuestions);

  els.cropStartModal.addEventListener("click", (event) => {
    if (event.target === els.cropStartModal) closeModal(els.cropStartModal);
  });
  [els.cropStartDrop, els.cropStartInput].forEach((target) => {
    target.addEventListener("dragover", (event) => {
      event.preventDefault();
      els.cropStartDrop.classList.add("drag-over");
    });
    target.addEventListener("dragleave", () => els.cropStartDrop.classList.remove("drag-over"));
    target.addEventListener("drop", handleCropStartDrop);
  });

  els.closePdfBtn.addEventListener("click", closePdfModal);
  els.pdfSettingsBtn.addEventListener("click", async () => {
    state.pdfScale = state.pdfScale >= 1.6 ? 1.15 : state.pdfScale + 0.25;
    await renderPdfPage();
    showToast(`PDF yakınlığı %${Math.round(state.pdfScale * 100)}`);
  });
  els.pdfSelect.addEventListener("change", async () => {
    state.currentPdfId = els.pdfSelect.value;
    await renderPdfPage();
  });
  els.prevPdfPageBtn.addEventListener("click", () => changePdfPage(-1));
  els.nextPdfPageBtn.addEventListener("click", () => changePdfPage(1));
  els.pdfPageSelect.addEventListener("change", () => setPdfPage(Number(els.pdfPageSelect.value)));
  els.uploadPdfQuestionsBtn.addEventListener("click", markPdfQuestionsLoaded);

  els.pdfCanvasWrap.addEventListener("pointerdown", startPdfSelection);
  window.addEventListener("pointermove", movePdfSelection);
  window.addEventListener("pointerup", finishPdfSelection);
  els.confirmCropBtn.addEventListener("click", confirmPdfCrop);
  $$(".answer-picks button").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedAnswer = state.selectedAnswer === button.dataset.answer ? "" : button.dataset.answer;
      $$(".answer-picks button").forEach((item) => item.classList.toggle("active", item.dataset.answer === state.selectedAnswer));
    });
  });

  els.questionGapToggle.addEventListener("change", () => {
    if (els.questionGapToggle.checked) {
      openGapModal("global");
    } else {
      state.settings.globalGap = 0;
      renderQuestionGrid();
    }
  });
  els.gapSelect.addEventListener("change", () => {
    updateGapCustomState();
  });
  els.gapCustomValue.addEventListener("input", updateGapCustomState);
  els.gapOkBtn.addEventListener("click", applyGapModal);
  els.gapCancelBtn.addEventListener("click", closeGapModal);
  els.splitOkBtn.addEventListener("click", applySplitModal);
  els.splitCancelBtn.addEventListener("click", () => closeModal(els.splitModal));

  els.otherSettingsBtn.addEventListener("click", () => openModal(els.otherSettingsModal));
  els.watermarkToggle.addEventListener("change", () => {
    if (els.watermarkToggle.checked) openModal(els.watermarkModal);
    state.settings.watermark.enabled = els.watermarkToggle.checked;
  });
  [els.wmOpacity, els.wmSize, els.wmAngle].forEach((slider) => slider.addEventListener("input", updateWatermarkLabels));
  els.watermarkOkBtn.addEventListener("click", saveWatermark);
  els.customMarginsBtn.addEventListener("click", openMarginsModal);
  els.marginsOkBtn.addEventListener("click", saveMargins);
  els.marginPreset.addEventListener("change", applyMarginPreset);
  els.paperColor.addEventListener("input", () => setAccentColor(els.paperColor.value));
  $("#customColorBtn").addEventListener("click", () => openFilePicker(els.paperColor));
  $$("#colorSwatches .swatch[data-color]").forEach((button) => {
    button.addEventListener("click", () => setAccentColor(button.dataset.color));
  });

  $$("[data-close-modal]").forEach((button) => {
    button.addEventListener("click", () => closeModal(button.closest(".overlay")));
  });

  els.closeEditorBtn.addEventListener("click", () => closeModal(els.editorModal));
  els.toolsMenuBtn.addEventListener("click", () => els.toolsDropdown.classList.toggle("hidden"));
  els.insertEquationBtn.addEventListener("click", () => {
    const value = prompt("Denklem", "√x");
    if (value) insertEditorHtml(`<span class="math-expression">${escapeHtml(value)}</span>`);
    els.toolsDropdown.classList.add("hidden");
  });
  els.openDrawingBtn.addEventListener("click", () => {
    els.toolsDropdown.classList.add("hidden");
    redrawDrawingCanvas();
    openModal(els.drawingModal);
  });
  els.wordCountBtn.addEventListener("click", () => {
    const text = stripHtml(els.questionEditor.innerHTML).trim();
    const count = text ? text.split(/\s+/).length : 0;
    showToast(`${count} kelime`);
    els.toolsDropdown.classList.add("hidden");
  });
  els.editorModal.querySelectorAll("[data-command]").forEach((button) => {
    button.addEventListener("click", () => document.execCommand(button.dataset.command, false, null));
  });
  els.editorFont.addEventListener("change", () => document.execCommand("fontName", false, els.editorFont.value));
  els.editorSize.addEventListener("change", () => {
    const px = Number.parseInt(els.editorSize.value, 10) || 12;
    document.execCommand("fontSize", false, "3");
    els.questionEditor.querySelectorAll("font[size='3']").forEach((font) => {
      font.removeAttribute("size");
      font.style.fontSize = `${px}px`;
    });
  });
  els.insertImageBtn.addEventListener("click", () => {
    state.imageTarget = "editor";
    openFilePicker(els.imageInput);
  });
  els.insertTableBtn.addEventListener("click", () => {
    insertEditorHtml(
      '<table class="editor-insert-table"><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>',
    );
  });
  els.insertSigmaBtn.addEventListener("click", () => insertEditorHtml("Σ"));
  els.insertOmegaBtn.addEventListener("click", () => insertEditorHtml("Ω"));
  els.insertSymbolBtn.addEventListener("click", () => insertEditorHtml("☺"));
  els.uploadEditorQuestionBtn.addEventListener("click", uploadEditorQuestion);

  els.drawingModal.querySelectorAll("[data-tool]").forEach((button) => {
    button.addEventListener("click", () => setDrawingTool(button.dataset.tool));
  });
  els.moreDrawingBtn.addEventListener("click", () => els.moreDrawingModal.classList.remove("hidden"));
  els.closeMoreDrawingBtn.addEventListener("click", () => els.moreDrawingModal.classList.add("hidden"));
  els.closeDrawingBtn.addEventListener("click", () => closeModal(els.drawingModal));
  els.insertDrawingBtn.addEventListener("click", insertDrawingIntoEditor);
  els.drawingCanvas.addEventListener("pointerdown", startDrawing);
  els.drawingCanvas.addEventListener("pointermove", moveDrawing);
  els.drawingCanvas.addEventListener("pointerup", finishDrawing);

  els.closeDocumentBtn.addEventListener("click", () => closeModal(els.documentModal));
  els.docZoomOutBtn.addEventListener("click", () => setDocumentZoom(state.docZoom - 0.1));
  els.docZoomFitBtn.addEventListener("click", () => setDocumentZoom(1));
  els.docZoomInBtn.addEventListener("click", () => setDocumentZoom(state.docZoom + 0.1));
  els.downloadDocBtn.addEventListener("click", downloadDocumentPdf);
  els.sideDownloadBtn.addEventListener("click", downloadDocumentPdf);
  els.sideEmailBtn.addEventListener("click", openEmailShareModal);
  els.sidePdfEmailBtn.addEventListener("click", sharePdfByEmail);
  els.emailShareBtn.addEventListener("click", shareDocumentByEmail);
  els.emailAppBtn.addEventListener("click", openMailClient);

  els.questionGrid.addEventListener("dragover", (event) => event.preventDefault());
  els.questionGrid.addEventListener("drop", handleDrop);
  $(".work-area").addEventListener("dragover", (event) => event.preventDefault());
  $(".work-area").addEventListener("drop", handleDrop);
}

function applyExamMode() {
  els.modeTabs.forEach((button) => button.classList.toggle("active", button.dataset.examKind === state.examKind));
  const isWritten = state.examKind === "written";
  const isSheet = state.examKind === "sheet";

  els.writtenType.classList.toggle("hidden", !isWritten);
  els.descriptionField.classList.toggle("hidden", isWritten);
  els.teacherOption.classList.toggle("hidden", isSheet);
  els.answerKeyOption.classList.toggle("hidden", !isSheet);
  els.groupName.disabled = isSheet;
  els.groupName.style.opacity = isSheet ? "0.62" : "1";
}

function showAdvancedPanel() {
  els.basicPanel.classList.add("hidden");
  els.advancedPanel.classList.remove("hidden");
}

function showBasicPanel() {
  els.advancedPanel.classList.add("hidden");
  els.basicPanel.classList.remove("hidden");
}

async function handleMediaFiles(event) {
  const files = Array.from(event.target.files || []);
  if (files.length === 0) return;
  const { pdfFiles, images } = splitMediaFiles(files);
  if (pdfFiles.length) await loadPdfFiles(pdfFiles, true);
  if (images.length) await addImageFiles(images);
  event.target.value = "";
}

async function handleCropStartFiles(event) {
  const files = Array.from(event.target.files || []);
  if (files.length) await handleCropSourceFiles(files);
  event.target.value = "";
}

async function handleCropStartDrop(event) {
  event.preventDefault();
  els.cropStartDrop.classList.remove("drag-over");
  const files = Array.from(event.dataTransfer?.files || []);
  if (files.length) await handleCropSourceFiles(files);
}

async function handleCropSourceFiles(files) {
  const { pdfFiles, images } = splitMediaFiles(files);
  if (!pdfFiles.length && !images.length) {
    showToast("PDF veya görsel dosya seç");
    return;
  }
  closeModal(els.cropStartModal);
  if (pdfFiles.length) await loadPdfFiles(pdfFiles, true);
  if (images.length) await addImageFiles(images);
}

async function handleDrop(event) {
  event.preventDefault();
  const files = Array.from(event.dataTransfer?.files || []);
  if (files.length) {
    await handleMediaFileList(files);
  }
}

async function handleMediaFileList(files) {
  const { pdfFiles, images } = splitMediaFiles(files);
  if (pdfFiles.length) await loadPdfFiles(pdfFiles, true);
  if (images.length) await addImageFiles(images);
}

function splitMediaFiles(files) {
  const list = Array.from(files || []);
  return {
    pdfFiles: list.filter((file) => file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf")),
    images: list.filter((file) => file.type.startsWith("image/") || /\.(png|jpe?g|webp|gif)$/i.test(file.name)),
  };
}

async function loadPdfFiles(fileList, openAfter = true) {
  const files = Array.from(fileList || []);
  if (!files.length) return;
  if (!window.pdfjsLib) {
    showToast("PDF görüntüleyici yüklenemedi. İnternet bağlantısını kontrol et.");
    return;
  }

  for (const file of files) {
    try {
      const buffer = await file.arrayBuffer();
      const doc = await window.pdfjsLib.getDocument({ data: buffer }).promise;
      const pdf = {
        id: makeId(),
        name: file.name,
        doc,
        page: 1,
        pageCount: doc.numPages,
      };
      state.pdfs.push(pdf);
      state.currentPdfId = pdf.id;
    } catch (error) {
      console.error(error);
      showToast(`${file.name} açılamadı`);
    }
  }

  updateBadges();
  renderPdfSelect();
  if (openAfter && state.currentPdfId) {
    openModal(els.pdfModal);
    await renderPdfPage();
  }
}

function renderPdfSelect() {
  els.pdfSelect.innerHTML = state.pdfs.map((pdf) => `<option value="${pdf.id}">${escapeHtml(pdf.name)}</option>`).join("");
  if (state.currentPdfId) els.pdfSelect.value = state.currentPdfId;
}

async function openCropTool() {
  if (!state.pdfs.length) {
    openModal(els.cropStartModal);
    return;
  }
  renderPdfSelect();
  openModal(els.pdfModal);
  await renderPdfPage();
}

function getCurrentPdf() {
  return state.pdfs.find((pdf) => pdf.id === state.currentPdfId) || null;
}

async function renderPdfPage() {
  const pdf = getCurrentPdf();
  if (!pdf) return;

  const page = await pdf.doc.getPage(pdf.page);
  const viewport = page.getViewport({ scale: state.pdfScale });
  els.pdfCanvas.width = Math.floor(viewport.width);
  els.pdfCanvas.height = Math.floor(viewport.height);
  els.pdfCanvas.style.width = `${els.pdfCanvas.width}px`;
  els.pdfCanvas.style.height = `${els.pdfCanvas.height}px`;

  await page.render({ canvasContext: pdfCtx, viewport }).promise;
  renderPdfPageSelect(pdf);
  renderPdfOverlays();
  clearSelection();
}

function renderPdfPageSelect(pdf) {
  const options = Array.from({ length: pdf.pageCount }, (_, index) => {
    const page = index + 1;
    return `<option value="${page}">${page}</option>`;
  });
  els.pdfPageSelect.innerHTML = options.join("");
  els.pdfPageSelect.value = pdf.page;
}

function renderPdfOverlays() {
  const pdf = getCurrentPdf();
  if (!pdf) return;
  const pageQuestions = state.questions.filter((question) => question.pdfId === pdf.id && question.page === pdf.page);
  els.pdfOverlayLayer.innerHTML = pageQuestions
    .map((question) => {
      const box = canvasToDisplayBox(relativeToCanvasBox(question.box));
      const number = getQuestionNumber(question.id);
      const label = question.asDescription ? "Açıklama" : `${number}. Soru`;
      return `
        <div class="pdf-q-box ${question.loaded ? "" : "pending"}" style="left:${box.left}px;top:${box.top}px;width:${box.width}px;height:${box.height}px" data-id="${question.id}">
          <span class="pdf-q-label">${escapeHtml(label)}</span>
          <button class="pdf-q-delete" type="button" data-delete-pdf-question="${question.id}">Soruyu Sil</button>
          ${question.loaded ? `<span class="loaded-badge"><i data-lucide="check"></i>Yüklendi</span>` : ""}
        </div>
      `;
    })
    .join("");

  els.pdfOverlayLayer.querySelectorAll("[data-delete-pdf-question]").forEach((button) => {
    button.addEventListener("click", () => removeQuestion(button.dataset.deletePdfQuestion));
  });
  els.pdfQuestionTotal.textContent = `Toplam Soru: ${getPrintableQuestions().length}`;
  refreshIcons();
}

function startPdfSelection(event) {
  if (!getCurrentPdf() || event.target.closest("button") || event.button !== 0) return;
  const point = clientToCanvasPoint(event);
  state.isSelecting = true;
  state.selection = {
    startX: point.x,
    startY: point.y,
    endX: point.x,
    endY: point.y,
  };
  drawSelection();
}

function movePdfSelection(event) {
  if (!state.isSelecting || !state.selection) return;
  const point = clientToCanvasPoint(event);
  state.selection.endX = point.x;
  state.selection.endY = point.y;
  drawSelection();
}

function finishPdfSelection() {
  if (!state.isSelecting) return;
  state.isSelecting = false;
  const box = normalizedSelection();
  if (!box || box.width < 24 || box.height < 24) {
    clearSelection();
    return;
  }
  positionSelectionConfirm(box);
}

function drawSelection() {
  const box = normalizedSelection();
  if (!box) return;
  const displayBox = canvasToDisplayBox(box);
  Object.assign(els.selectionBox.style, {
    left: `${displayBox.left}px`,
    top: `${displayBox.top}px`,
    width: `${displayBox.width}px`,
    height: `${displayBox.height}px`,
  });
  els.selectionBox.classList.remove("hidden");
}

function positionSelectionConfirm(box) {
  state.selectedAnswer = "";
  $$(".answer-picks button").forEach((button) => button.classList.remove("active"));
  const displayBox = canvasToDisplayBox(box);
  const canvasBottom = els.pdfCanvas.offsetTop + els.pdfCanvas.getBoundingClientRect().height;
  Object.assign(els.selectionConfirm.style, {
    left: `${displayBox.left + Math.max(0, displayBox.width - 320) / 2}px`,
    top: `${Math.min(displayBox.top + displayBox.height + 8, canvasBottom - 42)}px`,
  });
  els.selectionConfirm.classList.remove("hidden");
}

function clientToCanvasPoint(event) {
  const rect = els.pdfCanvas.getBoundingClientRect();
  const scaleX = els.pdfCanvas.width / Math.max(1, rect.width);
  const scaleY = els.pdfCanvas.height / Math.max(1, rect.height);
  return {
    x: clamp((event.clientX - rect.left) * scaleX, 0, els.pdfCanvas.width),
    y: clamp((event.clientY - rect.top) * scaleY, 0, els.pdfCanvas.height),
  };
}

function canvasToDisplayBox(box) {
  const rect = els.pdfCanvas.getBoundingClientRect();
  const scaleX = rect.width / Math.max(1, els.pdfCanvas.width);
  const scaleY = rect.height / Math.max(1, els.pdfCanvas.height);
  return {
    left: els.pdfCanvas.offsetLeft + box.x * scaleX,
    top: els.pdfCanvas.offsetTop + box.y * scaleY,
    width: box.width * scaleX,
    height: box.height * scaleY,
  };
}

function normalizedSelection() {
  if (!state.selection) return null;
  const x = Math.min(state.selection.startX, state.selection.endX);
  const y = Math.min(state.selection.startY, state.selection.endY);
  const width = Math.abs(state.selection.startX - state.selection.endX);
  const height = Math.abs(state.selection.startY - state.selection.endY);
  return { x, y, width, height };
}

function confirmPdfCrop() {
  const pdf = getCurrentPdf();
  const box = normalizedSelection();
  if (!pdf || !box) return;

  const crop = cropCanvas(els.pdfCanvas, box);
  const trimmed = trimCanvas(crop);
  const question = {
    id: makeId(),
    kind: "image",
    src: trimmed.toDataURL("image/png"),
    source: pdf.name,
    answer: state.selectedAnswer || "",
    loaded: false,
    expanded: false,
    asDescription: false,
    bottomGap: 0,
    customGap: false,
    pdfId: pdf.id,
    page: pdf.page,
    box: canvasToRelativeBox(box),
    createdAt: new Date().toISOString(),
  };
  state.questions.push(question);
  clearSelection();
  renderPdfOverlays();
  renderQuestionGrid();
  updateBadges();
}

function cropCanvas(canvas, box) {
  const output = document.createElement("canvas");
  output.width = Math.max(1, Math.floor(box.width));
  output.height = Math.max(1, Math.floor(box.height));
  output.getContext("2d").drawImage(canvas, box.x, box.y, box.width, box.height, 0, 0, output.width, output.height);
  return output;
}

function trimCanvas(canvas) {
  const ctx = canvas.getContext("2d");
  const { width, height } = canvas;
  const data = ctx.getImageData(0, 0, width, height).data;
  let top = height;
  let bottom = 0;
  let left = width;
  let right = 0;

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const index = (y * width + x) * 4;
      const r = data[index];
      const g = data[index + 1];
      const b = data[index + 2];
      const a = data[index + 3];
      if (a > 10 && (r < 246 || g < 246 || b < 246)) {
        top = Math.min(top, y);
        bottom = Math.max(bottom, y);
        left = Math.min(left, x);
        right = Math.max(right, x);
      }
    }
  }

  if (right <= left || bottom <= top) return canvas;
  const pad = 5;
  left = Math.max(0, left - pad);
  top = Math.max(0, top - pad);
  right = Math.min(width - 1, right + pad);
  bottom = Math.min(height - 1, bottom + pad);

  const trimmed = document.createElement("canvas");
  trimmed.width = right - left + 1;
  trimmed.height = bottom - top + 1;
  trimmed.getContext("2d").drawImage(canvas, left, top, trimmed.width, trimmed.height, 0, 0, trimmed.width, trimmed.height);
  return trimmed;
}

function clearSelection() {
  state.selection = null;
  state.isSelecting = false;
  els.selectionBox.classList.add("hidden");
  els.selectionConfirm.classList.add("hidden");
}

async function changePdfPage(delta) {
  const pdf = getCurrentPdf();
  if (!pdf) return;
  pdf.page = clamp(pdf.page + delta, 1, pdf.pageCount);
  await renderPdfPage();
}

async function setPdfPage(page) {
  const pdf = getCurrentPdf();
  if (!pdf) return;
  pdf.page = clamp(page, 1, pdf.pageCount);
  await renderPdfPage();
}

function markPdfQuestionsLoaded() {
  const pdf = getCurrentPdf();
  if (!pdf) return;
  state.questions
    .filter((question) => question.pdfId === pdf.id)
    .forEach((question) => {
      question.loaded = true;
    });
  renderPdfOverlays();
  renderQuestionGrid();
  showToast(`${state.questions.length} öğe yüklendi`);
}

function closePdfModal() {
  closeModal(els.pdfModal);
  renderQuestionGrid();
}

async function addImageFiles(files) {
  for (const file of files) {
    const src = await fileToDataUrl(file);
    state.questions.push({
      id: makeId(),
      kind: "image",
      src,
      source: file.name || "Fotoğraf",
      answer: "",
      loaded: true,
      expanded: false,
      asDescription: false,
      bottomGap: 0,
      customGap: false,
      createdAt: new Date().toISOString(),
    });
  }
  renderQuestionGrid();
  updateBadges();
  showToast(`${files.length} görsel eklendi`);
}

async function importImagesAsQuestions(event) {
  const files = Array.from(event.target.files || []);
  if (state.imageTarget === "editor") {
    for (const file of files) {
      const src = await fileToDataUrl(file);
      document.execCommand("insertHTML", false, `<img src="${src}" style="max-width:100%;display:block;margin:8px 0" />`);
    }
    state.imageTarget = "question";
  } else {
    await addImageFiles(files);
  }
  event.target.value = "";
}

function normalizeWorkspaceState() {
  state.questions.forEach((question) => {
    if (question.customGap == null) question.customGap = false;
    if (question.answer == null) question.answer = "";
  });
  ensureSections();
}

function ensureSections() {
  const sections = Array.isArray(state.sections) ? state.sections : [];
  const byStart = new Map();
  sections.forEach((section) => {
    const start = clamp(Math.floor(Number(section.start) || 0), 0, Math.max(0, state.questions.length - 1));
    if (!byStart.has(start)) {
      byStart.set(start, {
        id: section.id || makeId(),
        start,
        title: section.title || "",
        resetNumbering: Boolean(section.resetNumbering),
        newPage: Boolean(section.newPage),
      });
    }
  });
  if (!byStart.has(0)) {
    byStart.set(0, { id: "default-section", start: 0, title: "", resetNumbering: false, newPage: false });
  }
  state.sections = Array.from(byStart.values()).sort((a, b) => a.start - b.start);
}

function getQuestionSections() {
  ensureSections();
  return state.sections.map((section, index) => {
    const next = state.sections[index + 1];
    const end = next ? next.start : state.questions.length;
    return {
      section,
      sectionIndex: index,
      start: section.start,
      end,
      questions: state.questions.slice(section.start, end),
      nextSection: next || null,
    };
  });
}

function shouldShowSections() {
  return state.sections.length > 1 || state.sections.some((section) => section.title.trim());
}

function getQuestionNumberMap() {
  ensureSections();
  const map = new Map();
  let sectionIndex = 0;
  let totalNumber = 0;
  let sectionNumber = 0;
  for (let index = 0; index < state.questions.length; index += 1) {
    if (state.sections[sectionIndex + 1]?.start === index) {
      sectionIndex += 1;
      sectionNumber = 0;
    }
    const question = state.questions[index];
    if (question.asDescription) continue;
    totalNumber += 1;
    sectionNumber += 1;
    const section = state.sections[sectionIndex] || state.sections[0];
    const automaticNumber = section?.resetNumbering ? sectionNumber : totalNumber;
    map.set(question.id, question.customNumber || String(automaticNumber));
  }
  return map;
}

function getQuestionGap(question) {
  if (question.customGap && Number.isFinite(Number(question.bottomGap))) return Number(question.bottomGap);
  return Number(state.settings.globalGap) || 0;
}

function renderQuestionGrid() {
  normalizeWorkspaceState();
  els.emptyState.classList.toggle("hidden", state.questions.length > 0);
  els.floatingDock.classList.toggle("hidden", state.questions.length === 0);
  els.loadedCountText.textContent = `${state.questions.length} öğe yüklendi`;
  const numberMap = getQuestionNumberMap();
  if (shouldShowSections()) {
    els.questionGrid.classList.add("sectioned");
    els.questionGrid.innerHTML = getQuestionSections()
      .map((sectionInfo) => renderQuestionSection(sectionInfo, numberMap))
      .join("");
  } else {
    els.questionGrid.classList.remove("sectioned");
    els.questionGrid.innerHTML = state.questions.map((question, index) => renderQuestionCard(question, index, numberMap)).join("");
  }

  els.questionGrid.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      const question = findQuestion(button.closest(".question-card").dataset.id);
      if (!question) return;
      question.answer = question.answer === button.dataset.answer ? "" : button.dataset.answer;
      renderQuestionGrid();
    });
  });

  els.questionGrid.querySelectorAll("[data-question-number]").forEach((input) => {
    input.addEventListener("change", () => {
      const question = findQuestion(input.closest(".question-card").dataset.id);
      if (!question) return;
      const value = input.value.trim();
      if (value) question.customNumber = value;
      else delete question.customNumber;
      renderQuestionGrid();
    });
  });

  els.questionGrid.querySelectorAll("[data-section-title]").forEach((input) => {
    input.addEventListener("change", () => {
      const section = state.sections.find((item) => item.id === input.closest(".question-section").dataset.sectionId);
      if (!section) return;
      section.title = input.value.trim();
      renderQuestionGrid();
    });
  });

  els.questionGrid.querySelectorAll("[data-section-action]").forEach((button) => {
    button.addEventListener("click", () => handleSectionAction(button));
  });

  els.questionGrid.querySelectorAll("[data-card-action]").forEach((button) => {
    button.addEventListener("click", () => handleCardAction(button));
  });

  refreshIcons();
}

function renderQuestionSection(sectionInfo, numberMap) {
  const { section, questions, start, sectionIndex, nextSection } = sectionInfo;
  const title = escapeHtml(section.title || "");
  const canRemove = section.start > 0;
  const editStart = section.start > 0 ? section.start : nextSection?.start;
  return `
    <section class="question-section" data-section-id="${section.id}" data-section-start="${section.start}" data-edit-start="${editStart ?? ""}">
      <header class="section-header">
        <input data-section-title type="text" value="${title}" placeholder="Bölüm adı" />
        <button type="button" data-section-action="edit" title="Bölümü düzenle"><i data-lucide="settings"></i></button>
        ${canRemove ? `<button type="button" data-section-action="remove" title="Bölüm ayrımını kaldır"><i data-lucide="x-circle"></i></button>` : ""}
      </header>
      <div class="section-question-grid">
        ${questions.map((question, offset) => renderQuestionCard(question, start + offset, numberMap)).join("")}
      </div>
    </section>
  `;
}

function renderQuestionCard(question, index, numberMap = getQuestionNumberMap()) {
  const number = numberMap.get(question.id) || "";
  const cardTitle = question.asDescription
    ? `<h3 class="description-title">Açıklama</h3>`
    : `<h3 class="question-title"><input data-question-number type="text" value="${escapeHtml(number)}" title="Soru numarasını değiştir" /><span>Soru</span></h3>`;
  const content =
    question.kind === "manual"
      ? `<div class="manual-question-thumb">${question.html}</div>`
      : `<img class="question-thumb" src="${question.src}" alt="${number}. soru" />`;
  return `
    <article class="question-card ${question.expanded ? "wide-print" : ""} ${question.asDescription ? "is-description" : ""}" data-id="${question.id}" data-index="${index}" style="--question-gap:${getQuestionGap(question)}mm">
      <div class="card-tools">
        <button type="button" data-card-action="split" title="Testi bu sorudan itibaren ayır"><i data-lucide="separator-horizontal"></i></button>
        <button type="button" class="${question.expanded ? "active" : ""}" data-card-action="expand" title="${question.expanded ? "Kağıtta geniş basılacak" : "Soruyu Genişlet"}"><i data-lucide="move-horizontal"></i></button>
        <button type="button" class="${question.asDescription ? "active" : ""}" data-card-action="description" title="${question.asDescription ? "Açıklama olarak basılacak" : "Açıklama olarak ekle"}"><i data-lucide="message-square"></i></button>
        <button type="button" class="gap-tool ${question.customGap ? "active" : ""}" data-card-action="gap" title="Soru altına boşluk ekle"><i data-lucide="chevron-up"></i><i data-lucide="chevron-down"></i></button>
      </div>
      <div class="card-top-tools">
        <button type="button" data-card-action="preview" title="Önizle"><i data-lucide="search"></i></button>
        <button type="button" data-card-action="delete" title="Sil"><i data-lucide="x"></i></button>
      </div>
      ${cardTitle}
      ${content}
      ${question.asDescription ? "" : `<div class="answer-row">
        ${["A", "B", "C", "D", "E"].map((answer) => `<button type="button" class="${question.answer === answer ? "active" : ""}" data-answer="${answer}">${answer}</button>`).join("")}
      </div>`}
    </article>
  `;
}

function handleCardAction(button) {
  const card = button.closest(".question-card");
  const index = Number(card.dataset.index);
  const question = findQuestion(card.dataset.id) || state.questions[index];
  if (!question) return;

  const action = button.dataset.cardAction;
  if (action === "delete") removeQuestion(question.id);
  if (action === "preview") previewQuestion(question);
  if (action === "expand") {
    question.expanded = !question.expanded;
    renderQuestionGrid();
  }
  if (action === "description") {
    question.asDescription = !question.asDescription;
    if (question.asDescription) {
      question.answer = "";
      delete question.customNumber;
    }
    showToast(question.asDescription ? "Açıklama olarak işaretlendi" : "Soru olarak işaretlendi");
    renderQuestionGrid();
  }
  if (action === "gap") openGapModal("question", question.id, index + 1);
  if (action === "split") openSplitModal(question.id, index);
}

function previewQuestion(question) {
  if (question.kind === "manual") {
    const canvas = htmlQuestionToCanvas(question.html);
    els.previewImage.src = canvas.toDataURL("image/png");
  } else {
    els.previewImage.src = question.src;
  }
  openModal(els.imagePreviewModal);
}

function removeQuestion(id) {
  const removedIndex = state.questions.findIndex((question) => question.id === id);
  state.questions = state.questions.filter((question) => question.id !== id);
  if (removedIndex >= 0) {
    state.sections = state.sections
      .map((section) => {
        if (section.start > removedIndex) return { ...section, start: section.start - 1 };
        return section;
      })
      .filter((section) => section.start === 0 || section.start < state.questions.length);
    ensureSections();
  }
  renderQuestionGrid();
  renderPdfOverlays();
  updateBadges();
}

function clearAllQuestions() {
  state.questions = [];
  state.sections = [{ id: "default-section", start: 0, title: "", resetNumbering: false, newPage: false }];
  renderQuestionGrid();
  renderPdfOverlays();
  updateBadges();
  showToast("Tüm sorular kaldırıldı");
}

function openGapModal(target, questionId = null, number = 1) {
  state.gapTarget = target;
  state.gapQuestionId = questionId;
  const question = findQuestion(questionId);
  const current = target === "question" && question?.customGap ? Number(question.bottomGap) : Number(state.settings.globalGap) || 35;
  const presetValues = ["15", "20", "25", "30", "35", "40", "45", "50", "55"];
  const currentText = String(current);
  els.gapSelect.value = presetValues.includes(currentText) ? currentText : "custom";
  els.gapCustomValue.value = Number.isFinite(current) ? current : 35;
  els.gapFirstNo.textContent = `${number}.`;
  els.gapSecondNo.textContent = `${number + 1}.`;
  updateGapCustomState();
  openModal(els.gapModal);
}

function updateGapCustomState() {
  const isCustom = els.gapSelect.value === "custom";
  els.gapCustomWrap.classList.toggle("hidden", !isCustom);
  const value = isCustom ? Number(els.gapCustomValue.value) || 0 : Number(els.gapSelect.value);
  els.gapValueLabel.textContent = `${clamp(value, 0, 120)} mm`;
}

function applyGapModal() {
  let value = els.gapSelect.value === "custom" ? Number(els.gapCustomValue.value) : Number(els.gapSelect.value);
  if (!Number.isFinite(value)) value = 35;
  value = clamp(value, 0, 120);
  if (state.gapTarget === "question") {
    const question = findQuestion(state.gapQuestionId);
    if (question) {
      question.bottomGap = value;
      question.customGap = true;
    }
  } else {
    state.settings.globalGap = value;
    els.questionGapToggle.checked = value > 0;
  }
  closeGapModal();
  renderQuestionGrid();
}

function closeGapModal() {
  closeModal(els.gapModal);
  if (state.gapTarget === "global" && state.settings.globalGap === 0) {
    els.questionGapToggle.checked = false;
  }
}

function openSplitModal(questionId = null, forcedStart = null) {
  ensureSections();
  const questionIndex = questionId ? state.questions.findIndex((question) => question.id === questionId) : -1;
  const forcedIndex = Number(forcedStart);
  const splitIndex = Number.isFinite(forcedIndex) ? Math.trunc(forcedIndex) : questionIndex;
  if (!canSplitAtIndex(splitIndex)) {
    showToast("Testi ayırmak için bu sorudan önce ve sonra soru olmalı");
    return;
  }

  const beforeSection = getSectionBeforeStart(splitIndex);
  let afterSection = state.sections.find((section) => section.start === splitIndex);
  state.splitQuestionId = questionId;
  state.splitIndex = splitIndex;

  els.splitBeforeName.value = beforeSection?.title || "";
  els.splitAfterName.value = afterSection?.title || "";
  els.splitBeforeRange.textContent = getRangeLabel(beforeSection?.start || 0, splitIndex);
  els.splitAfterRange.textContent = getRangeLabel(splitIndex, getNextSectionStart(splitIndex));
  els.splitResetNumber.checked = Boolean(afterSection?.resetNumbering);
  els.splitNewPage.checked = Boolean(afterSection?.newPage);
  openModal(els.splitModal);
  setTimeout(() => els.splitBeforeName.focus(), 30);
}

function applySplitModal() {
  ensureSections();
  const splitIndex = Number(state.splitIndex);
  if (!canSplitAtIndex(splitIndex)) {
    closeModal(els.splitModal);
    return;
  }

  const beforeSection = getSectionBeforeStart(splitIndex);
  if (beforeSection) beforeSection.title = els.splitBeforeName.value.trim();

  let afterSection = state.sections.find((section) => section.start === splitIndex);
  if (!afterSection) {
    afterSection = { id: makeId(), start: splitIndex, title: "", resetNumbering: false, newPage: false };
    state.sections.push(afterSection);
  }
  afterSection.title = els.splitAfterName.value.trim();
  afterSection.resetNumbering = els.splitResetNumber.checked;
  afterSection.newPage = els.splitNewPage.checked;

  ensureSections();
  closeModal(els.splitModal);
  renderQuestionGrid();
  showToast("Test bölümü güncellendi");
}

function handleSectionAction(button) {
  const sectionEl = button.closest(".question-section");
  const section = state.sections.find((item) => item.id === sectionEl.dataset.sectionId);
  if (!section) return;

  const action = button.dataset.sectionAction;
  if (action === "edit") {
    const editStart = Number(sectionEl.dataset.editStart || section.start);
    openSplitModal(null, editStart);
  }
  if (action === "remove") {
    state.sections = state.sections.filter((item) => item.id !== section.id);
    ensureSections();
    renderQuestionGrid();
    showToast("Bölüm ayrımı kaldırıldı");
  }
}

function getSectionBeforeStart(start) {
  ensureSections();
  return state.sections
    .filter((section) => section.start < start)
    .sort((a, b) => b.start - a.start)[0] || state.sections[0];
}

function getNextSectionStart(start) {
  ensureSections();
  const next = state.sections.find((section) => section.start > start);
  return next ? next.start : state.questions.length;
}

function canSplitAtIndex(splitIndex) {
  if (!Number.isInteger(splitIndex) || splitIndex <= 0 || splitIndex >= state.questions.length) return false;
  if (state.questions[splitIndex]?.asDescription) return false;
  const beforeQuestionCount = state.questions.slice(0, splitIndex).filter((question) => !question.asDescription).length;
  const afterQuestionCount = state.questions.slice(splitIndex).filter((question) => !question.asDescription).length;
  return beforeQuestionCount > 0 && afterQuestionCount > 0;
}

function getRangeLabel(start, end) {
  const realIndexes = [];
  for (let index = start; index < end; index += 1) {
    if (!state.questions[index]?.asDescription) realIndexes.push(index);
  }
  if (!realIndexes.length) return "Açıklama";
  const first = countRealQuestionsBefore(realIndexes[0]) + 1;
  const last = countRealQuestionsBefore(realIndexes[realIndexes.length - 1]) + 1;
  return `${first} - ${last}`;
}

function countRealQuestionsBefore(rawIndex) {
  return state.questions.slice(0, rawIndex).filter((question) => !question.asDescription).length;
}

function setAccentColor(color) {
  state.settings.accentColor = color;
  els.paperColor.value = color;
  document.documentElement.style.setProperty("--orange", color);
  $$("#colorSwatches .swatch[data-color]").forEach((button) => {
    button.classList.toggle("active", button.dataset.color.toLowerCase() === color.toLowerCase());
  });
}

function applyMarginPreset() {
  const preset = els.marginPreset.value;
  if (preset === "Dar") state.settings.margins = { top: 0.8, bottom: 0.8, left: 0.8, right: 0.8 };
  if (preset === "Normal") state.settings.margins = { top: 1.5, bottom: 1.5, left: 1.5, right: 1.5 };
  if (preset === "Geniş") state.settings.margins = { top: 2.5, bottom: 2.5, left: 2.5, right: 2.5 };
  updateMarginLabels();
}

function openMarginsModal() {
  const margins = state.settings.margins;
  els.marginTop.value = margins.top;
  els.marginBottom.value = margins.bottom;
  els.marginLeft.value = margins.left;
  els.marginRight.value = margins.right;
  openModal(els.marginsModal);
}

function saveMargins() {
  state.settings.margins = {
    top: Number(els.marginTop.value) || 0,
    bottom: Number(els.marginBottom.value) || 0,
    left: Number(els.marginLeft.value) || 0,
    right: Number(els.marginRight.value) || 0,
  };
  updateMarginLabels();
  closeModal(els.marginsModal);
}

function updateMarginLabels() {
  const { top, bottom, left, right } = state.settings.margins;
  els.marginTopLabel.textContent = `${formatDecimal(top)} cm`;
  els.marginBottomLabel.textContent = `${formatDecimal(bottom)} cm`;
  els.marginLeftLabel.textContent = `${formatDecimal(left)} cm`;
  els.marginRightLabel.textContent = `${formatDecimal(right)} cm`;
}

function updateWatermarkLabels() {
  els.wmOpacityLabel.textContent = `%${els.wmOpacity.value}`;
  els.wmSizeLabel.textContent = `%${els.wmSize.value}`;
  els.wmAngleLabel.textContent = `${els.wmAngle.value}°`;
}

function saveWatermark() {
  state.settings.watermark = {
    enabled: true,
    text: els.watermarkText.value.trim(),
    opacity: Number(els.wmOpacity.value),
    size: Number(els.wmSize.value),
    angle: Number(els.wmAngle.value),
    color: els.wmColor.value,
  };
  els.watermarkToggle.checked = true;
  closeModal(els.watermarkModal);
}

function openEditor() {
  openModal(els.editorModal);
  setTimeout(() => els.questionEditor.focus(), 50);
}

function insertEditorHtml(html) {
  openModal(els.editorModal);
  els.questionEditor.focus();
  document.execCommand("insertHTML", false, html);
}

function uploadEditorQuestion() {
  const html = els.questionEditor.innerHTML.trim();
  if (!html) {
    showToast("Önce soru metni yaz");
    return;
  }
  state.questions.push({
    id: makeId(),
    kind: "manual",
    html,
    source: "Soru Editörü",
    answer: "",
    loaded: true,
    expanded: els.editorQuestionType.value === "Geniş",
    asDescription: els.editorQuestionType.value === "Açıklama",
    bottomGap: 0,
    customGap: false,
    createdAt: new Date().toISOString(),
  });
  els.questionEditor.innerHTML = "";
  closeModal(els.editorModal);
  renderQuestionGrid();
  updateBadges();
  showToast("Editörden soru yüklendi");
}

function setDrawingTool(tool) {
  state.drawingTool = tool;
  els.drawingModal.querySelectorAll("[data-tool]").forEach((button) => {
    button.classList.toggle("active", button.dataset.tool === tool);
  });
  els.moreDrawingModal.classList.add("hidden");
  state.drawingTextArmed = tool === "text" || tool === "math";
  els.drawingHint.textContent = state.drawingTextArmed
    ? "Önce yazılacak metnin konumunu belirleyin."
    : "Şekli yerleştirmek için çizim alanına tıklayın.";
}

function startDrawing(event) {
  const point = drawingPoint(event);
  state.drawingDown = true;
  state.drawingStart = point;
  if (state.drawingTool === "point") {
    drawPoint(point.x, point.y);
    state.drawingDown = false;
  }
  if (state.drawingTool === "text" || state.drawingTool === "math") {
    const text = prompt(state.drawingTool === "math" ? "Matematiksel ifade" : "Metin", state.drawingTool === "math" ? "√x" : "A");
    if (text) drawText(point.x, point.y, text);
    state.drawingDown = false;
  }
}

function moveDrawing() {
  if (!state.drawingDown) return;
}

function finishDrawing(event) {
  if (!state.drawingDown || !state.drawingStart) return;
  const end = drawingPoint(event);
  drawShape(state.drawingStart, end, state.drawingTool);
  state.drawingDown = false;
  state.drawingStart = null;
}

function drawShape(start, end, tool) {
  drawCtx.save();
  drawCtx.strokeStyle = "#111";
  drawCtx.fillStyle = "#111";
  drawCtx.lineWidth = 2;
  const x = Math.min(start.x, end.x);
  const y = Math.min(start.y, end.y);
  const w = Math.abs(start.x - end.x);
  const h = Math.abs(start.y - end.y);

  if (tool === "segment") {
    drawCtx.beginPath();
    drawCtx.moveTo(start.x, start.y);
    drawCtx.lineTo(end.x, end.y);
    drawCtx.stroke();
  }
  if (tool === "rect") drawCtx.strokeRect(x, y, w, h);
  if (tool === "triangle") {
    drawCtx.beginPath();
    drawCtx.moveTo(x + w / 2, y);
    drawCtx.lineTo(x + w, y + h);
    drawCtx.lineTo(x, y + h);
    drawCtx.closePath();
    drawCtx.stroke();
  }
  if (tool === "circle") {
    drawCtx.beginPath();
    drawCtx.arc(start.x, start.y, Math.hypot(end.x - start.x, end.y - start.y), 0, Math.PI * 2);
    drawCtx.stroke();
  }
  if (tool === "ellipse") {
    drawCtx.beginPath();
    drawCtx.ellipse(x + w / 2, y + h / 2, w / 2, h / 2, 0, 0, Math.PI * 2);
    drawCtx.stroke();
  }
  if (tool === "polygon") drawPolygon(x + w / 2, y + h / 2, Math.max(w, h) / 2, 6);
  if (tool === "sector") {
    drawCtx.beginPath();
    drawCtx.moveTo(start.x, start.y);
    drawCtx.arc(start.x, start.y, Math.max(w, h), 0, Math.PI / 2);
    drawCtx.closePath();
    drawCtx.stroke();
  }
  if (tool === "arc") {
    drawCtx.beginPath();
    drawCtx.arc(start.x, start.y, Math.max(w, h), Math.PI * 0.15, Math.PI * 0.85);
    drawCtx.stroke();
  }
  if (tool === "angle") {
    drawCtx.beginPath();
    drawCtx.moveTo(start.x, end.y);
    drawCtx.lineTo(start.x, start.y);
    drawCtx.lineTo(end.x, start.y);
    drawCtx.stroke();
    drawCtx.beginPath();
    drawCtx.arc(start.x, start.y, 24, 0, Math.PI / 2);
    drawCtx.stroke();
  }
  if (tool === "free") {
    drawCtx.beginPath();
    drawCtx.moveTo(start.x, start.y);
    drawCtx.bezierCurveTo(start.x + 70, start.y - 80, end.x - 70, end.y + 80, end.x, end.y);
    drawCtx.stroke();
  }
  drawCtx.restore();
}

function drawPoint(x, y) {
  drawCtx.beginPath();
  drawCtx.arc(x, y, 5, 0, Math.PI * 2);
  drawCtx.fillStyle = "#000";
  drawCtx.fill();
}

function drawText(x, y, text) {
  drawCtx.font = "24px Arial";
  drawCtx.fillStyle = "#000";
  drawCtx.fillText(text, x, y);
}

function drawPolygon(cx, cy, radius, sides) {
  drawCtx.beginPath();
  for (let i = 0; i < sides; i += 1) {
    const angle = -Math.PI / 2 + (Math.PI * 2 * i) / sides;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    if (i === 0) drawCtx.moveTo(x, y);
    else drawCtx.lineTo(x, y);
  }
  drawCtx.closePath();
  drawCtx.stroke();
}

function redrawDrawingCanvas() {
  drawCtx.fillStyle = "#ffffff";
  drawCtx.fillRect(0, 0, els.drawingCanvas.width, els.drawingCanvas.height);
  drawCtx.strokeStyle = "#e2e8f0";
  drawCtx.lineWidth = 1;
  for (let x = 0; x <= els.drawingCanvas.width; x += 28) {
    drawCtx.beginPath();
    drawCtx.moveTo(x, 0);
    drawCtx.lineTo(x, els.drawingCanvas.height);
    drawCtx.stroke();
  }
  for (let y = 0; y <= els.drawingCanvas.height; y += 28) {
    drawCtx.beginPath();
    drawCtx.moveTo(0, y);
    drawCtx.lineTo(els.drawingCanvas.width, y);
    drawCtx.stroke();
  }
  drawCtx.strokeStyle = "#b8c7d8";
  drawCtx.beginPath();
  drawCtx.moveTo(0, els.drawingCanvas.height / 2);
  drawCtx.lineTo(els.drawingCanvas.width, els.drawingCanvas.height / 2);
  drawCtx.moveTo(els.drawingCanvas.width / 2, 0);
  drawCtx.lineTo(els.drawingCanvas.width / 2, els.drawingCanvas.height);
  drawCtx.stroke();
}

function insertDrawingIntoEditor() {
  const src = els.drawingCanvas.toDataURL("image/png");
  document.execCommand("insertHTML", false, `<img src="${src}" style="max-width:100%;display:block;margin:8px 0" />`);
  closeModal(els.drawingModal);
  openModal(els.editorModal);
}

function drawingPoint(event) {
  const rect = els.drawingCanvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
}

async function openDocumentPreview() {
  const margins = state.settings.margins;
  els.docName.textContent = (els.testTitle.value.trim() || "MATEMATİK").toUpperCase();
  els.finalPaper.className = `final-paper paper-${els.paperSize.value} orientation-${els.orientation.value}`;
  els.finalPaper.style.setProperty("--paper-margin-top", `${margins.top}cm`);
  els.finalPaper.style.setProperty("--paper-margin-right", `${margins.right}cm`);
  els.finalPaper.style.setProperty("--paper-margin-bottom", `${margins.bottom}cm`);
  els.finalPaper.style.setProperty("--paper-margin-left", `${margins.left}cm`);
  setDocumentZoom(1, false);
  els.finalPaper.innerHTML = `<div class="paper-loading">Sayfalar hazırlanıyor...</div>`;
  openModal(els.documentModal);
  els.finalPaper.innerHTML = await buildFinalPaperHtml();
  updateDocumentPageSummary();
  if (window.lucide) window.lucide.createIcons();
}

async function buildFinalPaperHtml() {
  const title = (els.testTitle.value.trim() || "MATEMATİK").toUpperCase();
  const school = els.schoolName.value.trim();
  const classInfo = els.className.value.trim();
  const groupInfo = els.groupName.value !== "Grup Yok" ? els.groupName.value : "";
  const examInfo = state.examKind === "written" ? els.writtenType.value : els.descriptionField.value.trim();
  const teacherInfo = els.includeTeacher.checked ? `<span>Öğretmen: __________________</span>` : "";
  const columns = els.columnCount.value;
  const watermark = state.settings.watermark.enabled && state.settings.watermark.text
    ? `<div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%) rotate(${state.settings.watermark.angle}deg);font-size:${state.settings.watermark.size}px;color:${state.settings.watermark.color};opacity:${state.settings.watermark.opacity / 100};pointer-events:none">${escapeHtml(state.settings.watermark.text)}</div>`
    : "";

  const metaItems = [
    school ? `<span>Okul: ${escapeHtml(school)}</span>` : "",
    examInfo ? `<span>${escapeHtml(examInfo)}</span>` : "",
    classInfo ? `<span>Sınıf/Şube: ${escapeHtml(classInfo)}</span>` : "",
    groupInfo ? `<span>${escapeHtml(groupInfo)}</span>` : "",
    teacherInfo,
  ]
    .filter(Boolean)
    .join("");

  const layout = getPaperLayoutMetrics(Boolean(metaItems));
  const questions = await buildPrintableQuestionItems(layout);
  const pages = paginatePrintableItems(questions, layout);
  appendSupplementalPrintSections(pages, layout);
  const smartClass = els.smartLayout.checked ? " smart" : "";

  return pages
    .map(
      (page, index) => `
    <section class="paper-page" data-page="${index + 1}">
      ${watermark}
      <h1 class="final-title"><span>${escapeHtml(title)}</span></h1>
      ${index === 0 && metaItems ? `<section class="final-meta">${metaItems}</section>` : ""}
      ${renderPrintablePageSections(page.sections, columns, smartClass)}
      <footer><span>${index + 1}</span></footer>
    </section>
  `,
    )
    .join("");
}

function getPaperLayoutMetrics(hasMeta) {
  const size = els.paperSize.value;
  const orientation = els.orientation.value;
  const pageSizes = {
    a4: { portrait: { width: 720, height: 1018 }, landscape: { width: 1018, height: 720 } },
    a5: { portrait: { width: 560, height: 795 }, landscape: { width: 795, height: 560 } },
  };
  const page = pageSizes[size]?.[orientation] || pageSizes.a4.portrait;
  const margins = state.settings.margins;
  const cmToPx = 37.795;
  const contentWidth = page.width - (margins.left + margins.right) * cmToPx;
  const contentHeight = page.height - (margins.top + margins.bottom) * cmToPx;
  const columns = Number(els.columnCount.value) || 2;
  const columnGap = 18;
  const titleHeight = 38;
  const metaHeight = hasMeta ? 42 : 0;
  const footerHeight = 42;
  const firstPageHeight = Math.max(160, contentHeight - titleHeight - metaHeight - footerHeight);
  const nextPageHeight = Math.max(160, contentHeight - titleHeight - footerHeight);
  const columnWidth = (contentWidth - columnGap * (columns - 1)) / columns;

  return {
    pageWidth: page.width,
    pageHeight: page.height,
    contentWidth,
    firstPageHeight,
    nextPageHeight,
    columns,
    columnGap,
    columnWidth,
  };
}

async function buildPrintableQuestionItems(layout) {
  const gap = state.settings.globalGap || 14;
  const mmToPx = 3.78;
  const items = [];
  const numberMap = getQuestionNumberMap();
  const showSections = shouldShowSections();

  for (const sectionInfo of getQuestionSections()) {
    const { section, questions, start } = sectionInfo;
    const sectionTitle = section.title.trim();
    if (showSections && (sectionTitle || (start > 0 && section.newPage))) {
      items.push({
        type: "section-title",
        html: sectionTitle ? `<section class="final-section-title">${escapeHtml(sectionTitle)}</section>` : "",
        fullWidth: section.newPage || layout.columns === 1,
        sectionStart: true,
        forceNewPage: start > 0 && section.newPage,
        estimatedHeight: sectionTitle ? 34 : 0,
      });
    }

    for (const [offset, question] of questions.entries()) {
      const rawIndex = start + offset;
      const number = numberMap.get(question.id) || "";
      const fullWidth = Boolean(question.expanded);
      const printWidth = fullWidth ? layout.contentWidth : layout.columnWidth;
      const questionGap = getQuestionGap(question);
      const content =
        question.kind === "manual"
          ? `<div>${question.html}</div>`
          : `<img src="${question.src}" alt="${number ? `${number}. soru` : "açıklama"}" />`;
      const className = `final-question ${question.expanded ? "expanded" : ""} ${question.asDescription ? "description" : ""}`;
      const numberHtml = question.asDescription ? "" : `<b>${escapeHtml(number)}.</b>`;
      const html = `<article class="${className}" data-raw-index="${rawIndex}" style="--question-gap:${questionGap}mm">${numberHtml}${content}</article>`;
      const contentHeight =
        question.kind === "manual"
          ? estimateManualQuestionHeight(question.html, printWidth, question.expanded)
          : await estimateImageQuestionHeight(question.src, printWidth);
      items.push({
        html,
        fullWidth,
        estimatedHeight: Math.ceil(contentHeight + questionGap * mmToPx + 16),
      });
    }
  }

  return items;
}

async function estimateImageQuestionHeight(src, printWidth) {
  try {
    const image = await loadImageFromSrc(src);
    const naturalWidth = image.naturalWidth || image.width || 680;
    const naturalHeight = image.naturalHeight || image.height || 360;
    return Math.max(42, printWidth * (naturalHeight / naturalWidth));
  } catch (error) {
    return Math.max(120, printWidth * 0.52);
  }
}

function estimateManualQuestionHeight(html, printWidth, expanded) {
  const text = stripHtml(html).trim();
  const charsPerLine = Math.max(22, Math.floor(printWidth / (expanded ? 7 : 5)));
  const lines = Math.max(4, Math.ceil(text.length / charsPerLine));
  return lines * (expanded ? 18 : 13) + 24;
}

function createPrintPage(layout, pageIndex) {
  return {
    sections: [],
    columnHeights: Array.from({ length: layout.columns }, () => 0),
    maxHeight: pageIndex === 0 ? layout.firstPageHeight : layout.nextPageHeight,
  };
}

function paginatePrintableItems(items, layout) {
  const pages = [createPrintPage(layout, 0)];
  const smartLayout = els.smartLayout.checked;
  let flowColumnIndex = 0;

  const currentPage = () => pages[pages.length - 1];
  const addPage = () => {
    pages.push(createPrintPage(layout, pages.length));
    flowColumnIndex = 0;
    return currentPage();
  };
  const addColumnSection = (page) => {
    const last = page.sections[page.sections.length - 1];
    if (last?.type === "columns") return last;
    const section = {
      type: "columns",
      columns: Array.from({ length: layout.columns }, () => []),
    };
    page.sections.push(section);
    return section;
  };

  for (const item of items) {
    let page = currentPage();
    if (item.forceNewPage && page.sections.length) {
      page = addPage();
    }
    const itemHeight = Math.min(item.estimatedHeight, page.maxHeight - 8);

    if (item.fullWidth) {
      let used = Math.max(...page.columnHeights);
      if (used > 0 && used + itemHeight > page.maxHeight) {
        page = addPage();
        used = 0;
      }
      page.sections.push({ type: "full", html: item.html });
      page.columnHeights = page.columnHeights.map(() => used + itemHeight);
      flowColumnIndex = 0;
      continue;
    }

    let columnIndex = smartLayout ? indexOfShortestColumn(page.columnHeights) : flowColumnIndex;
    if (!smartLayout && item.sectionStart && page.columnHeights[columnIndex] > 0) {
      if (columnIndex < layout.columns - 1) {
        columnIndex += 1;
      } else {
        page = addPage();
        columnIndex = 0;
      }
    }
    if (page.columnHeights[columnIndex] > 0 && page.columnHeights[columnIndex] + itemHeight > page.maxHeight) {
      if (!smartLayout && columnIndex < layout.columns - 1) {
        columnIndex += 1;
      } else {
        page = addPage();
        columnIndex = 0;
      }
    }
    const section = addColumnSection(page);
    section.columns[columnIndex].push(item.html);
    page.columnHeights[columnIndex] += itemHeight;
    if (!smartLayout) flowColumnIndex = columnIndex;
  }

  const filledPages = pages.filter((page) => page.sections.length);
  return filledPages.length ? filledPages : [createPrintPage(layout, 0)];
}

function appendSupplementalPrintSections(pages, layout) {
  const extras = [];
  const printableQuestions = getPrintableQuestions();
  const numberMap = getQuestionNumberMap();
  if (els.includeAnswerKey.checked) {
    extras.push({
      estimatedHeight: 64,
      html: `<section class="final-extra final-answer-key"><b>Cevap Anahtarı:</b> ${printableQuestions
        .map((question) => `${numberMap.get(question.id) || ""}-${question.answer || "-"}`)
        .join("  ")}</section>`,
    });
  }
  if (els.includeOptic.checked) {
    extras.push({
      estimatedHeight: Math.min(260, 46 + printableQuestions.length * 15),
      html: `<section class="final-optic"><b>Optik Form</b>${printableQuestions
        .map(
          (question) =>
            `<div><span>${numberMap.get(question.id) || ""}</span>${["A", "B", "C", "D", "E"].map((answer) => `<em>${answer}</em>`).join("")}</div>`,
        )
        .join("")}</section>`,
    });
  }

  for (const extra of extras) {
    let page = pages[pages.length - 1] || createPrintPage(layout, 0);
    if (!pages.length) pages.push(page);
    let used = Math.max(...page.columnHeights);
    if (used > 0 && used + extra.estimatedHeight > page.maxHeight) {
      page = createPrintPage(layout, pages.length);
      pages.push(page);
      used = 0;
    }
    page.sections.push({ type: "full", html: extra.html });
    page.columnHeights = page.columnHeights.map(() => used + extra.estimatedHeight);
  }
}

function getPrintableQuestions() {
  return state.questions.filter((question) => !question.asDescription);
}

function renderPrintablePageSections(sections, columns, smartClass) {
  if (!sections.length) return `<section class="final-questions columns-${columns}${smartClass}"></section>`;
  return sections
    .map((section) => {
      if (section.type === "full") return section.html;
      return `<section class="final-questions columns-${columns}${smartClass}">${section.columns
        .map((column) => `<div class="final-column">${column.join("")}</div>`)
        .join("")}</section>`;
    })
    .join("");
}

function indexOfShortestColumn(values) {
  let index = 0;
  values.forEach((value, candidate) => {
    if (value < values[index]) index = candidate;
  });
  return index;
}

function updateDocumentPageSummary() {
  const pages = Math.max(1, els.finalPaper.querySelectorAll(".paper-page").length);
  if (els.docPageStatus) els.docPageStatus.innerHTML = `Sayfa: <b>1</b> / ${pages}`;
  if (els.docInfoLine) els.docInfoLine.innerHTML = `Sayfa: ${pages} <span>Boyut: yaklaşık ${Math.max(1, pages * 215)} KB</span>`;
}

function setDocumentZoom(value, announce = true) {
  state.docZoom = clamp(value, 0.65, 1.65);
  els.finalPaper.style.setProperty("--doc-zoom", state.docZoom);
  if (announce) showToast(`Önizleme %${Math.round(state.docZoom * 100)}`);
}

function getDocumentExport() {
  const title = (els.testTitle.value.trim() || els.docName.textContent || "sinav").trim();
  const safeTitle = getSafeDocumentBaseName(title);
  const filename = `${safeTitle || "hazirlanan-sinav"}.html`;
  const html = `<!doctype html><meta charset="utf-8"><title>${escapeHtml(title)}</title><style>${getExportStyles()}</style>${els.finalPaper.outerHTML}`;
  return { filename, html, title };
}

async function downloadDocumentPdf() {
  try {
    showToast("PDF hazırlanıyor");
    const { filename, pdfBytes } = await createDocumentPdfFile();
    await saveFileAs(filename, "application/pdf", pdfBytes, {
      description: "PDF sınav dokümanı",
      accept: { "application/pdf": [".pdf"] },
    });
  } catch (error) {
    console.error(error);
    showToast("PDF oluşturulamadı");
  }
}

async function createDocumentPdfFile() {
  const { title } = getDocumentExport();
  const safeTitle = getSafeDocumentBaseName(title) || "hazirlanan-sinav";
  const canvases = await renderFinalPaperToCanvases();
  const pages = canvases.map((canvas) => ({
    jpegBytes: dataUrlToBytes(canvas.toDataURL("image/jpeg", 0.94)),
    widthPx: canvas.width,
    heightPx: canvas.height,
  }));
  const pdfBytes = createImagePagesPdf(pages);
  const filename = `${safeTitle}.pdf`;
  const file = new File([pdfBytes], filename, { type: "application/pdf" });
  return { filename, pdfBytes, file, title };
}

async function renderFinalPaperToCanvases() {
  const pageElements = Array.from(els.finalPaper.querySelectorAll(".paper-page"));
  const targets = pageElements.length ? pageElements : [els.finalPaper];
  const canvases = [];
  for (const target of targets) {
    canvases.push(await renderPaperElementToCanvas(target));
  }
  return canvases;
}

async function renderPaperElementToCanvas(paper) {
  const width = Math.ceil(paper.offsetWidth || paper.scrollWidth);
  const height = Math.ceil(paper.offsetHeight || paper.scrollHeight);
  const scale = 2;
  const canvas = document.createElement("canvas");
  canvas.width = Math.ceil(width * scale);
  canvas.height = Math.ceil(height * scale);
  const ctx = canvas.getContext("2d");
  ctx.scale(scale, scale);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);

  await drawPaperDomToCanvas(ctx, paper);
  return canvas;
}

async function drawPaperDomToCanvas(ctx, paper) {
  const paperRect = paper.getBoundingClientRect();
  const zoom = paperRect.width / Math.max(1, paper.offsetWidth);
  const boxOf = (element) => {
    const rect = element.getBoundingClientRect();
    return {
      x: (rect.left - paperRect.left) / zoom,
      y: (rect.top - paperRect.top) / zoom,
      width: rect.width / zoom,
      height: rect.height / zoom,
    };
  };

  const title = paper.querySelector(".final-title");
  if (title) {
    const box = boxOf(title);
    ctx.strokeStyle = state.settings.accentColor;
    ctx.lineWidth = 1;
    roundRect(ctx, box.x, box.y, box.width, box.height, 8);
    ctx.stroke();

    const label = title.querySelector("span");
    if (label) {
      const labelBox = boxOf(label);
      ctx.fillStyle = state.settings.accentColor;
      roundRect(ctx, labelBox.x, labelBox.y, labelBox.width, labelBox.height, labelBox.height / 2);
      ctx.fill();
      ctx.fillStyle = "#ffffff";
      ctx.font = "700 12px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(label.textContent.trim(), labelBox.x + labelBox.width / 2, labelBox.y + labelBox.height / 2);
    }
  }

  const meta = paper.querySelector(".final-meta");
  if (meta) {
    const box = boxOf(meta);
    ctx.fillStyle = "#f8fafc";
    roundRect(ctx, box.x, box.y, box.width, box.height, 8);
    ctx.fill();
    ctx.strokeStyle = "#dbe4ef";
    ctx.stroke();
    ctx.fillStyle = "#334155";
    ctx.font = "10px Arial";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    drawWrappedCanvasText(ctx, meta.textContent.trim(), box.x + 10, box.y + 8, box.width - 20, 14);
  }

  for (const sectionTitle of paper.querySelectorAll(".final-section-title")) {
    const box = boxOf(sectionTitle);
    ctx.strokeStyle = "#111827";
    ctx.lineWidth = 1;
    ctx.strokeRect(box.x, box.y, box.width, box.height);
    ctx.fillStyle = "#111827";
    ctx.font = "700 11px Arial";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText(sectionTitle.textContent.trim(), box.x + 6, box.y + box.height / 2);
  }

  for (const article of paper.querySelectorAll(".final-question")) {
    const box = boxOf(article);
    if (article.classList.contains("description")) {
      ctx.fillStyle = "#f8fafc";
      roundRect(ctx, box.x, box.y, box.width, box.height, 6);
      ctx.fill();
      ctx.strokeStyle = "#a7b6c8";
      ctx.stroke();
    }

    const number = article.querySelector("b");
    if (number) {
      const numberBox = boxOf(number);
      ctx.fillStyle = "#111827";
      ctx.font = article.classList.contains("expanded") ? "700 14px Arial" : "700 9px Arial";
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      ctx.fillText(number.textContent.trim(), numberBox.x, numberBox.y);
    }

    const image = article.querySelector("img");
    if (image) {
      const imageBox = boxOf(image);
      const loadedImage = await loadImageFromSrc(image.currentSrc || image.src);
      ctx.drawImage(loadedImage, imageBox.x, imageBox.y, imageBox.width, imageBox.height);
    } else {
      const textSource = article.querySelector("div") || article;
      const textBox = boxOf(textSource);
      ctx.fillStyle = "#111827";
      ctx.font = article.classList.contains("expanded") ? "14px Arial" : "9px Arial";
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      drawWrappedCanvasText(ctx, textSource.textContent.trim(), textBox.x, textBox.y, textBox.width, 13);
    }
  }

  const answerKey = Array.from(paper.querySelectorAll("section")).find((section) => section.textContent.includes("Cevap Anahtarı"));
  if (answerKey) {
    const box = boxOf(answerKey);
    ctx.strokeStyle = "#111827";
    ctx.beginPath();
    ctx.moveTo(box.x, box.y);
    ctx.lineTo(box.x + box.width, box.y);
    ctx.stroke();
    ctx.fillStyle = "#111827";
    ctx.font = "10px Arial";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    drawWrappedCanvasText(ctx, answerKey.textContent.trim(), box.x, box.y + 8, box.width, 14);
  }

  const optic = paper.querySelector(".final-optic");
  if (optic) {
    const box = boxOf(optic);
    ctx.strokeStyle = "#c9d6e3";
    roundRect(ctx, box.x, box.y, box.width, box.height, 8);
    ctx.stroke();
    ctx.fillStyle = "#111827";
    ctx.font = "9px Arial";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    drawWrappedCanvasText(ctx, optic.textContent.trim(), box.x + 10, box.y + 10, box.width - 20, 12);
  }

  const footer = paper.querySelector("footer");
  if (footer) {
    const box = boxOf(footer);
    ctx.strokeStyle = state.settings.accentColor;
    ctx.beginPath();
    ctx.moveTo(box.x, box.y);
    ctx.lineTo(box.x + box.width, box.y);
    ctx.moveTo(box.x, box.y + box.height);
    ctx.lineTo(box.x + box.width, box.y + box.height);
    ctx.stroke();
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(box.x + box.width / 2, box.y + box.height / 2, 11, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = state.settings.accentColor;
    ctx.font = "11px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText((footer.querySelector("span")?.textContent || footer.textContent || "1").trim(), box.x + box.width / 2, box.y + box.height / 2);
  }
}

function roundRect(ctx, x, y, width, height, radius) {
  const safeRadius = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + safeRadius, y);
  ctx.lineTo(x + width - safeRadius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + safeRadius);
  ctx.lineTo(x + width, y + height - safeRadius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - safeRadius, y + height);
  ctx.lineTo(x + safeRadius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - safeRadius);
  ctx.lineTo(x, y + safeRadius);
  ctx.quadraticCurveTo(x, y, x + safeRadius, y);
  ctx.closePath();
}

function loadImageFromSrc(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Soru görseli PDF'e eklenemedi"));
    image.src = src;
  });
}

function drawWrappedCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(/\s+/).filter(Boolean);
  let line = "";
  let cursorY = y;
  words.forEach((word) => {
    const candidate = line ? `${line} ${word}` : word;
    if (ctx.measureText(candidate).width > maxWidth && line) {
      ctx.fillText(line, x, cursorY);
      line = word;
      cursorY += lineHeight;
    } else {
      line = candidate;
    }
  });
  if (line) ctx.fillText(line, x, cursorY);
}

function createImagePagesPdf(pages) {
  const encoder = new TextEncoder();
  const parts = [encoder.encode("%PDF-1.4\n%\xE2\xE3\xCF\xD3\n")];
  const offsets = [0];
  let length = parts[0].length;

  const addPart = (part) => {
    const bytes = typeof part === "string" ? encoder.encode(part) : part;
    parts.push(bytes);
    length += bytes.length;
  };
  const addObject = (number, body) => {
    offsets[number] = length;
    addPart(`${number} 0 obj\n`);
    if (Array.isArray(body)) body.forEach(addPart);
    else addPart(body);
    addPart("\nendobj\n");
  };

  addObject(1, "<< /Type /Catalog /Pages 2 0 R >>");
  const pageObjectNumbers = pages.map((_, index) => 3 + index * 3);
  addObject(2, `<< /Type /Pages /Kids [${pageObjectNumbers.map((number) => `${number} 0 R`).join(" ")}] /Count ${pages.length} >>`);

  pages.forEach((page, index) => {
    const pageObject = 3 + index * 3;
    const imageObject = pageObject + 1;
    const contentObject = pageObject + 2;
    const imageName = `Im${index}`;
    const pageWidth = page.widthPx * 0.75;
    const pageHeight = page.heightPx * 0.75;
    const content = `q\n${pageWidth.toFixed(2)} 0 0 ${pageHeight.toFixed(2)} 0 0 cm\n/${imageName} Do\nQ`;

    addObject(
      pageObject,
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth.toFixed(2)} ${pageHeight.toFixed(2)}] /Resources << /XObject << /${imageName} ${imageObject} 0 R >> >> /Contents ${contentObject} 0 R >>`,
    );
    addObject(imageObject, [
      `<< /Type /XObject /Subtype /Image /Width ${page.widthPx} /Height ${page.heightPx} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${page.jpegBytes.length} >>\nstream\n`,
      page.jpegBytes,
      "\nendstream",
    ]);
    addObject(contentObject, `<< /Length ${encoder.encode(content).length} >>\nstream\n${content}\nendstream`);
  });

  const xrefOffset = length;
  const objectCount = 2 + pages.length * 3;
  addPart(`xref\n0 ${objectCount + 1}\n0000000000 65535 f \n${offsets
    .slice(1)
    .map((offset) => `${String(offset).padStart(10, "0")} 00000 n `)
    .join("\n")}\ntrailer\n<< /Size ${objectCount + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`);

  const pdf = new Uint8Array(length);
  let cursor = 0;
  parts.forEach((part) => {
    pdf.set(part, cursor);
    cursor += part.length;
  });
  return pdf;
}

function createSingleImagePdf(jpegBytes, widthPx, heightPx) {
  return createImagePagesPdf([{ jpegBytes, widthPx, heightPx }]);
}

function dataUrlToBytes(dataUrl) {
  const base64 = dataUrl.split(",")[1] || "";
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}

function getSafeDocumentBaseName(title) {
  return title
    .toLowerCase()
    .replaceAll("ı", "i")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ş", "s")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function getExportStyles() {
  return Array.from(document.styleSheets)
    .map((sheet) => {
      try {
        return Array.from(sheet.cssRules || [])
          .map((rule) => rule.cssText)
          .join("\n");
      } catch (error) {
        return "";
      }
    })
    .join("\n");
}

function openEmailShareModal() {
  const { filename, title } = getDocumentExport();
  els.emailSubject.value = `${title} sınav dokümanı`;
  els.emailMessage.value = `Merhaba,\n\nHazırlanan sınav dokümanını paylaşıyorum.\n\nDosya: ${filename}`;
  els.emailFileName.textContent = `${filename} paylaşılacak`;
  openModal(els.emailModal);
}

async function shareDocumentByEmail() {
  const { filename, html, title } = getDocumentExport();
  const subject = els.emailSubject.value.trim() || `${title} sınav dokümanı`;
  const message = els.emailMessage.value.trim() || "Hazırlanan sınav dokümanını paylaşıyorum.";
  const file = new File([html], filename, { type: "text/html" });

  if (navigator.share && (!navigator.canShare || navigator.canShare({ files: [file] }))) {
    try {
      await navigator.share({ title: subject, text: message, files: [file] });
      showToast("Paylaşım penceresi açıldı");
      closeModal(els.emailModal);
      return;
    } catch (error) {
      if (error?.name === "AbortError") {
        showToast("Paylaşım iptal edildi");
        return;
      }
      console.warn("share fallback", error);
    }
  }

  openMailClient();
}

async function sharePdfByEmail() {
  try {
    showToast("PDF paylaşım için hazırlanıyor");
    const { filename, file, title } = await createDocumentPdfFile();
    const subject = `${title} sınav dokümanı`;
    const message = `Merhaba,\n\nPDF sınav dokümanını paylaşıyorum.\n\nDosya: ${filename}`;

    if (navigator.share && (!navigator.canShare || navigator.canShare({ files: [file] }))) {
      await navigator.share({ title: subject, text: message, files: [file] });
      showToast("PDF paylaşım penceresi açıldı");
      return;
    }

    openMailClientWithValues(
      "",
      subject,
      `${message}\n\nNot: Tarayıcı PDF ekini otomatik ekleyemedi. PDF'i önce "Bilgisayarıma indir" ile kaydedip e-postaya ekleyebilirsin.`
    );
    showToast("E-posta açıldı; PDF'i ek olarak seç");
  } catch (error) {
    if (error?.name === "AbortError") {
      showToast("Paylaşım iptal edildi");
      return;
    }
    console.error(error);
    showToast("PDF paylaşımı başlatılamadı");
  }
}

function openMailClient() {
  const to = els.emailTo.value.trim();
  const subject = els.emailSubject.value.trim() || "Sınav dokümanı";
  const message = els.emailMessage.value.trim() || "Hazırlanan sınav dokümanını paylaşıyorum.";
  const body = `${message}\n\nNot: Dosyayı e-postaya eklemek için önce "Bilgisayarıma indir" ile kaydedebilirsin.`;
  openMailClientWithValues(to, subject, body);
}

function openMailClientWithValues(to, subject, body) {
  window.location.href = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

async function exportQuestionPackage() {
  const payload = {
    version: 1,
    exportedAt: new Date().toISOString(),
    examKind: state.examKind,
    fields: collectFields(),
    settings: state.settings,
    sections: state.sections,
    questions: state.questions,
  };
  const saved = await saveFileAs("soru-paketi.json", "application/json", JSON.stringify(payload), {
    description: "Soru paketi",
    accept: { "application/json": [".json"] },
  });
  if (saved) saveLocalDraft();
}

function saveLocalDraft() {
  const payload = {
    examKind: state.examKind,
    fields: collectFields(),
    settings: state.settings,
    sections: state.sections,
    questions: state.questions,
  };
  localStorage.setItem(storageKey, JSON.stringify(payload));
  showToast("Taslak kaydedildi");
}

async function importQuestionPackage(event) {
  const file = event.target.files?.[0];
  if (!file) {
    loadLocalDraft();
    return;
  }
  try {
    const text = await file.text();
    applyDraft(JSON.parse(text));
    showToast("Soru paketi yüklendi");
  } catch (error) {
    console.error(error);
    showToast("Kayıt dosyası okunamadı");
  }
  event.target.value = "";
}

function loadLocalDraft() {
  const raw = localStorage.getItem(storageKey);
  if (!raw) {
    showToast("Kayıtlı taslak yok");
    return;
  }
  applyDraft(JSON.parse(raw));
  showToast("Taslak geri yüklendi");
}

function applyDraft(draft) {
  state.examKind = draft.examKind || "written";
  state.questions = Array.isArray(draft.questions) ? draft.questions : [];
  state.sections = Array.isArray(draft.sections)
    ? draft.sections
    : [{ id: "default-section", start: 0, title: "", resetNumbering: false, newPage: false }];
  state.settings = { ...state.settings, ...(draft.settings || {}) };
  normalizeWorkspaceState();
  fillFields(draft.fields || {});
  els.questionGapToggle.checked = state.settings.globalGap > 0 || els.questionGapToggle.checked;
  els.watermarkToggle.checked = Boolean(state.settings.watermark?.enabled);
  applyExamMode();
  updateMarginLabels();
  setAccentColor(state.settings.accentColor || "#0f2f57");
  renderQuestionGrid();
  updateBadges();
}

function collectFields() {
  return {
    testTitle: els.testTitle.value,
    schoolName: els.schoolName.value,
    writtenType: els.writtenType.value,
    descriptionField: els.descriptionField.value,
    className: els.className.value,
    groupName: els.groupName.value,
    includeTeacher: els.includeTeacher.checked,
    includeAnswerKey: els.includeAnswerKey.checked,
    includeOptic: els.includeOptic.checked,
    questionGapToggle: els.questionGapToggle.checked,
    smartLayout: els.smartLayout.checked,
    columnCount: els.columnCount.value,
    paperSize: els.paperSize.value,
    orientation: els.orientation.value,
  };
}

function fillFields(fields) {
  Object.entries(fields).forEach(([key, value]) => {
    if (!els[key]) return;
    if (typeof value === "boolean") els[key].checked = value;
    else els[key].value = value;
  });
}

function updateBadges() {
  const pdfCount = state.pdfs.length;
  els.cropBadge.textContent = pdfCount;
  els.cropBadge.classList.toggle("hidden", pdfCount === 0);
  els.pdfQuestionTotal.textContent = `Toplam Soru: ${getPrintableQuestions().length}`;
}

function openModal(modal) {
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  refreshIcons();
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

function findQuestion(id) {
  return state.questions.find((question) => question.id === id);
}

function getQuestionNumber(id) {
  const question = findQuestion(id);
  if (!question || question.asDescription) return "";
  return getQuestionNumberMap().get(id) || "";
}

function relativeToCanvasBox(box) {
  return {
    x: box.x * els.pdfCanvas.width,
    y: box.y * els.pdfCanvas.height,
    width: box.width * els.pdfCanvas.width,
    height: box.height * els.pdfCanvas.height,
  };
}

function canvasToRelativeBox(box) {
  return {
    x: box.x / els.pdfCanvas.width,
    y: box.y / els.pdfCanvas.height,
    width: box.width / els.pdfCanvas.width,
    height: box.height / els.pdfCanvas.height,
  };
}

function htmlQuestionToCanvas(html) {
  const canvas = document.createElement("canvas");
  canvas.width = 680;
  canvas.height = 360;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#111";
  ctx.font = "18px Arial";
  const text = stripHtml(html).slice(0, 360);
  wrapText(ctx, text, 24, 42, 620, 28);
  return canvas;
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(/\s+/);
  let line = "";
  words.forEach((word) => {
    const testLine = `${line}${word} `;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, y);
      line = `${word} `;
      y += lineHeight;
    } else {
      line = testLine;
    }
  });
  ctx.fillText(line, x, y);
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function downloadFile(filename, type, content) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function saveFileAs(filename, type, content, options = {}) {
  const blob = new Blob([content], { type });
  if (window.showSaveFilePicker) {
    try {
      const handle = await window.showSaveFilePicker({
        suggestedName: filename,
        types: [
          {
            description: options.description || "Dosya",
            accept: options.accept || { [type]: [] },
          },
        ],
      });
      const writable = await handle.createWritable();
      await writable.write(blob);
      await writable.close();
      showToast("Dosya kaydedildi");
      return true;
    } catch (error) {
      if (error?.name === "AbortError") {
        showToast("Kaydetme iptal edildi");
        return false;
      }
      console.warn("save picker fallback", error);
    }
  }

  downloadFile(filename, type, content);
  showToast("Dosya indirildi");
  return true;
}

function openFilePicker(input) {
  if (!input) return;
  if (typeof input.showPicker === "function") {
    try {
      input.showPicker();
      return;
    } catch (error) {
      console.warn("showPicker fallback", error);
    }
  }
  input.click();
}

function makeId() {
  return crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function stripHtml(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}

function formatDecimal(value) {
  return String(value).replace(".", ",");
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.remove("hidden");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => els.toast.classList.add("hidden"), 2500);
}

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

init();
