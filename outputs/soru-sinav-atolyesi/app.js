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
  editingCropId: null,
  cropZoom: "fit",
  cropTrim: true,
  cropMode: "select",
  cropRenderVersion: 0,
  cropRendering: false,
  documentVariants: [],
  documentGroup: "",
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
    watermark: { enabled: false, type: "text", text: "", image: "", opacity: 20, size: 90, angle: 45, color: "#000000" },
    printOptions: { lineTextToggle: false, lineTextValue: "", compactMeta: false, preserveTitleCase: false, centerMeta: false, negativeWatermark: false, hideBooklet: false },
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
  customExamTitle: $("#customExamTitle"),
  teacherName: $("#teacherName"),
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
      "./vendor/pdf.worker.min.js";
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
  els.quickSaveBtn.addEventListener("click", exportQuestionPackage);
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
  els.pdfModalInput.addEventListener("change", handleCropStartFiles);
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
  els.pdfSettingsBtn.addEventListener("click", () => {
    $("#cropZoom").value = state.cropZoom;
    $("#cropTrim").checked = state.cropTrim;
    openModal($("#cropSettingsModal"));
  });
  $("#cropSettingsOkBtn").addEventListener("click", async () => {
    state.cropZoom = $("#cropZoom").value;
    state.cropTrim = $("#cropTrim").checked;
    closeModal($("#cropSettingsModal"));
    await renderPdfPage();
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
  window.addEventListener("pointercancel", clearSelection);
  window.addEventListener("resize", () => {
    if (!els.pdfModal.classList.contains("hidden")) {
      clearTimeout(renderPdfPage.resizeTimer);
      renderPdfPage.resizeTimer = setTimeout(renderPdfPage, 150);
    }
  });
  $("#cancelCropBtn").addEventListener("click", clearSelection);
  $$("[data-crop-mode]").forEach((button) => button.addEventListener("click", () => {
    state.cropMode = button.dataset.cropMode;
    clearSelection();
    els.pdfCanvasWrap.classList.toggle("pan-mode", state.cropMode === "pan");
    $$("[data-crop-mode]").forEach((item) => {
      const active = item.dataset.cropMode === state.cropMode;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
  }));
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

  els.writtenType.addEventListener("change", applyExamMode);
  els.includeTeacher.addEventListener("change", applyExamMode);
  els.otherSettingsBtn.addEventListener("click", () => {
    Object.entries(state.settings.printOptions).forEach(([key, value]) => {
      const input = document.getElementById(key);
      if (input.type === "checkbox") input.checked = value;
      else input.value = value;
    });
    openModal(els.otherSettingsModal);
  });
  $("#otherSettingsOkBtn").addEventListener("click", () => {
    Object.keys(state.settings.printOptions).forEach((key) => {
      const input = document.getElementById(key);
      state.settings.printOptions[key] = input.type === "checkbox" ? input.checked : input.value.trim();
    });
    closeModal(els.otherSettingsModal);
  });
  els.watermarkToggle.addEventListener("change", () => {
    if (els.watermarkToggle.checked) openWatermarkModal();
    else state.settings.watermark.enabled = false;
  });
  $$("input[name='watermarkType']").forEach((input) => input.addEventListener("change", updateWatermarkType));
  $("#watermarkImageInput").addEventListener("change", async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    try {
      const src = await fileToDataUrl(file);
      await loadImageFromSrc(src);
      $("#watermarkImagePreview").src = src;
      $("#watermarkImagePreview").classList.remove("hidden");
    } catch { showToast("Filigran görseli açılamadı"); }
    event.target.value = "";
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
  els.docZoomFitBtn.addEventListener("click", fitDocumentZoom);
  els.docZoomInBtn.addEventListener("click", () => setDocumentZoom(state.docZoom + 0.1));
  els.downloadDocBtn.addEventListener("click", downloadDocumentPdf);
  els.sideDownloadBtn.addEventListener("click", downloadDocumentPdf);
  els.sideEmailBtn.addEventListener("click", openEmailShareModal);
  els.sidePdfEmailBtn.addEventListener("click", sharePdfByEmail);
  els.emailShareBtn.addEventListener("click", shareDocumentByEmail);
  els.emailAppBtn.addEventListener("click", openMailClient);
  $("#docGroupSelect").addEventListener("change", async (event) => {
    state.documentGroup = event.target.value;
    await refreshDocumentPreview();
  });
  $(".doc-preview").addEventListener("scroll", updateDocumentPageSummary);

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
  els.customExamTitle.classList.toggle("hidden", !isWritten || els.writtenType.value !== "custom");
  els.descriptionField.classList.toggle("hidden", isWritten);
  els.teacherOption.classList.toggle("hidden", isSheet);
  els.teacherName.classList.toggle("hidden", isSheet || !els.includeTeacher.checked);
  els.answerKeyOption.classList.remove("hidden");
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
  event.stopPropagation();
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
  await loadCropSources([...pdfFiles, ...images]);
}

async function handleDrop(event) {
  event.preventDefault();
  event.stopPropagation();
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
  return loadCropSources(fileList, openAfter);
}

async function loadCropSources(fileList, openAfter = true) {
  const files = Array.from(fileList || []);
  if (!files.length) return;
  for (const file of files) {
    try {
      showToast(`${file.name} açılıyor`);
      const isPdf = file.type === "application/pdf" || /\.pdf$/i.test(file.name);
      if (isPdf && !window.pdfjsLib) throw new Error("PDF görüntüleyici yüklenemedi");
      const doc = isPdf ? await window.pdfjsLib.getDocument({ data: await file.arrayBuffer() }).promise : null;
      const image = isPdf ? null : await loadImageFromSrc(await fileToDataUrl(file));
      const pdf = {
        id: makeId(),
        name: file.name,
        doc,
        image,
        page: 1,
        pageCount: doc?.numPages || 1,
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
  const version = ++state.cropRenderVersion;
  state.cropRendering = true;
  clearSelection();
  els.pdfViewer.setAttribute("aria-busy", "true");
  try {
    const page = pdf.doc ? await pdf.doc.getPage(pdf.page) : null;
    const nativeSize = page ? page.getViewport({ scale: 1 }) : { width: pdf.image.naturalWidth, height: pdf.image.naturalHeight };
    const fit = Math.max(0.1, (els.pdfViewer.clientWidth - 24) / nativeSize.width);
    const displayScale = state.cropZoom === "fit" ? fit : Number(state.cropZoom);
    const rasterScale = Math.min(Math.max(displayScale * 2, 1.5), 5000 / Math.max(nativeSize.width, nativeSize.height));
    const buffer = document.createElement("canvas");
    buffer.width = Math.ceil(nativeSize.width * rasterScale);
    buffer.height = Math.ceil(nativeSize.height * rasterScale);
    const context = buffer.getContext("2d");
    if (page) await page.render({ canvasContext: context, viewport: page.getViewport({ scale: rasterScale }) }).promise;
    else {
      context.fillStyle = "white";
      context.fillRect(0, 0, buffer.width, buffer.height);
      context.drawImage(pdf.image, 0, 0, buffer.width, buffer.height);
    }
    if (version !== state.cropRenderVersion) return;
    els.pdfCanvas.width = buffer.width;
    els.pdfCanvas.height = buffer.height;
    els.pdfCanvas.style.width = `${nativeSize.width * displayScale}px`;
    els.pdfCanvas.style.height = `${nativeSize.height * displayScale}px`;
    pdfCtx.drawImage(buffer, 0, 0);
    renderPdfPageSelect(pdf);
    renderPdfOverlays();
    els.prevPdfPageBtn.disabled = pdf.page === 1;
    els.nextPdfPageBtn.disabled = pdf.page === pdf.pageCount;
  } catch (error) {
    console.error(error);
    showToast("Sayfa açılamadı. Dosyayı yeniden seçin.");
  } finally {
    if (version === state.cropRenderVersion) {
      state.cropRendering = false;
      els.pdfViewer.removeAttribute("aria-busy");
    }
  }
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
        <div class="pdf-q-box ${question.loaded ? "" : "pending"} ${question.id === state.editingCropId ? "hidden" : ""}" style="left:${box.left}px;top:${box.top}px;width:${box.width}px;height:${box.height}px" data-id="${question.id}">
          <span class="pdf-q-label">${escapeHtml(label)}</span>
          <div class="pdf-q-actions"><button type="button" data-edit-pdf-question="${question.id}" title="Kırpmayı düzenle"><i data-lucide="pencil"></i></button><button type="button" data-delete-pdf-question="${question.id}" title="Soruyu sil"><i data-lucide="trash-2"></i></button></div>
          ${question.loaded ? `<span class="loaded-badge"><i data-lucide="check"></i>Yüklendi</span>` : ""}
        </div>
      `;
    })
    .join("");

  els.pdfOverlayLayer.querySelectorAll("[data-delete-pdf-question]").forEach((button) => {
    button.addEventListener("click", () => removeQuestion(button.dataset.deletePdfQuestion));
  });
  els.pdfOverlayLayer.querySelectorAll("[data-edit-pdf-question]").forEach((button) => {
    button.addEventListener("click", () => editPdfCrop(button.dataset.editPdfQuestion));
  });
  els.pdfQuestionTotal.textContent = `Seçilen: ${state.questions.filter((q) => q.pdfId === pdf.id).length}`;
  refreshIcons();
}

function startPdfSelection(event) {
  if (!getCurrentPdf() || state.cropRendering || event.target.closest("button") || event.button !== 0) return;
  event.preventDefault();
  if (state.cropMode === "pan") {
    state.panGesture = { x: event.clientX, y: event.clientY, left: els.pdfViewer.scrollLeft, top: els.pdfViewer.scrollTop, pointerId: event.pointerId };
    els.pdfCanvasWrap.setPointerCapture(event.pointerId);
    return;
  }
  const point = clientToCanvasPoint(event);
  const resize = event.target.dataset.resize;
  const moving = event.target === els.selectionBox;
  state.cropGesture = { mode: resize || (moving ? "move" : "new"), point, box: normalizedSelection(), pointerId: event.pointerId };
  els.pdfCanvasWrap.setPointerCapture(event.pointerId);
  state.isSelecting = true;
  els.selectionConfirm.classList.add("hidden");
  if (state.cropGesture.mode === "new") state.selection = {
    startX: point.x,
    startY: point.y,
    endX: point.x,
    endY: point.y,
  };
  drawSelection();
}

function movePdfSelection(event) {
  if (state.panGesture) {
    const pan = state.panGesture;
    if (event.pointerId === pan.pointerId) {
      els.pdfViewer.scrollLeft = pan.left + pan.x - event.clientX;
      els.pdfViewer.scrollTop = pan.top + pan.y - event.clientY;
    }
    return;
  }
  if (!state.isSelecting || !state.selection) return;
  const point = clientToCanvasPoint(event);
  const gesture = state.cropGesture;
  if (event.pointerId !== gesture.pointerId) return;
  if (gesture.mode === "move") {
    const x = clamp(gesture.box.x + point.x - gesture.point.x, 0, els.pdfCanvas.width - gesture.box.width);
    const y = clamp(gesture.box.y + point.y - gesture.point.y, 0, els.pdfCanvas.height - gesture.box.height);
    state.selection = { startX: x, startY: y, endX: x + gesture.box.width, endY: y + gesture.box.height };
  } else if (gesture.mode !== "new") {
    const b = gesture.box;
    state.selection = {
      startX: gesture.mode.includes("w") ? Math.min(point.x, b.x + b.width - 12) : b.x,
      endX: gesture.mode.includes("e") ? Math.max(point.x, b.x + 12) : b.x + b.width,
      startY: gesture.mode.includes("n") ? Math.min(point.y, b.y + b.height - 12) : b.y,
      endY: gesture.mode.includes("s") ? Math.max(point.y, b.y + 12) : b.y + b.height,
    };
  } else {
    state.selection.endX = point.x;
    state.selection.endY = point.y;
  }
  drawSelection();
}

function finishPdfSelection() {
  if (state.panGesture) {
    if (els.pdfCanvasWrap.hasPointerCapture(state.panGesture.pointerId)) els.pdfCanvasWrap.releasePointerCapture(state.panGesture.pointerId);
    state.panGesture = null;
    return;
  }
  if (!state.isSelecting) return;
  state.isSelecting = false;
  if (els.pdfCanvasWrap.hasPointerCapture(state.cropGesture.pointerId)) els.pdfCanvasWrap.releasePointerCapture(state.cropGesture.pointerId);
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
  if (state.cropGesture?.mode === "new" && !state.editingCropId) state.selectedAnswer = "";
  $$(".answer-picks button").forEach((button) => button.classList.toggle("active", state.selectedAnswer === button.dataset.answer));
  const displayBox = canvasToDisplayBox(box);
  els.selectionConfirm.classList.remove("hidden");
  const width = els.selectionConfirm.offsetWidth;
  const height = els.selectionConfirm.offsetHeight;
  const minLeft = els.pdfViewer.scrollLeft + 4;
  const maxLeft = Math.max(minLeft, minLeft + els.pdfViewer.clientWidth - width - 8);
  const maxTop = Math.min(els.pdfCanvasWrap.offsetHeight - height - 4, els.pdfViewer.scrollTop + els.pdfViewer.clientHeight - height - 4);
  Object.assign(els.selectionConfirm.style, {
    left: `${clamp(displayBox.left + (displayBox.width - width) / 2, minLeft, maxLeft)}px`,
    top: `${clamp(displayBox.top + displayBox.height + 8, els.pdfViewer.scrollTop + 4, maxTop)}px`,
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
  const trimmed = state.cropTrim ? trimCanvas(crop) : crop;
  const existing = findQuestion(state.editingCropId);
  const question = {
    id: existing?.id || makeId(),
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
    ...existing,
    src: trimmed.toDataURL("image/png"),
    answer: state.selectedAnswer || "",
    box: canvasToRelativeBox(box),
  };
  if (existing) Object.assign(existing, question);
  else state.questions.push(question);
  clearSelection();
  renderPdfOverlays();
  renderQuestionGrid();
  updateBadges();
}

function editPdfCrop(id) {
  const question = findQuestion(id);
  if (!question || state.cropRendering) return;
  if (state.cropMode === "pan") $("[data-crop-mode='select']").click();
  state.editingCropId = id;
  const box = relativeToCanvasBox(question.box);
  state.selection = { startX: box.x, startY: box.y, endX: box.x + box.width, endY: box.y + box.height };
  state.cropGesture = null;
  state.selectedAnswer = question.answer || "";
  renderPdfOverlays();
  drawSelection();
  positionSelectionConfirm(box);
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
  const pointerId = state.panGesture?.pointerId ?? state.cropGesture?.pointerId;
  if (pointerId != null && els.pdfCanvasWrap.hasPointerCapture(pointerId)) els.pdfCanvasWrap.releasePointerCapture(pointerId);
  state.panGesture = null;
  state.selection = null;
  state.isSelecting = false;
  const wasEditing = state.editingCropId;
  state.editingCropId = null;
  state.cropGesture = null;
  els.selectionBox.classList.add("hidden");
  els.selectionConfirm.classList.add("hidden");
  if (wasEditing) renderPdfOverlays();
}

async function changePdfPage(delta) {
  const pdf = getCurrentPdf();
  if (!pdf) return;
  pdf.page = clamp(pdf.page + delta, 1, pdf.pageCount);
  els.pdfViewer.scrollTop = 0;
  await renderPdfPage();
}

async function setPdfPage(page) {
  const pdf = getCurrentPdf();
  if (!pdf) return;
  pdf.page = clamp(page, 1, pdf.pageCount);
  els.pdfViewer.scrollTop = 0;
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
  updateBadges();
  showToast(`${state.questions.filter((q) => q.pdfId === pdf.id).length} öğe yüklendi`);
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

function getQuestionSections(questions = state.questions) {
  ensureSections();
  return state.sections.map((section, index) => {
    const next = state.sections[index + 1];
    const end = next ? next.start : questions.length;
    return {
      section,
      sectionIndex: index,
      start: section.start,
      end,
      questions: questions.slice(section.start, end),
      nextSection: next || null,
    };
  });
}

function shouldShowSections() {
  return state.sections.length > 1 || state.sections.some((section) => section.title.trim());
}

function getQuestionNumberMap(questions = state.questions, includePending = true) {
  ensureSections();
  const map = new Map();
  let sectionIndex = 0;
  let totalNumber = 0;
  let sectionNumber = 0;
  for (let index = 0; index < questions.length; index += 1) {
    if (state.sections[sectionIndex + 1]?.start === index) {
      sectionIndex += 1;
      sectionNumber = 0;
    }
    const question = questions[index];
    if (question.asDescription || (!includePending && question.loaded === false)) continue;
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
  const count = state.questions.filter((q) => q.loaded !== false).length;
  els.emptyState.classList.toggle("hidden", count > 0);
  els.floatingDock.classList.toggle("hidden", count === 0);
  els.loadedCountText.textContent = `${count} öğe yüklendi`;
  const numberMap = getQuestionNumberMap(state.questions, false);
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
  if (question.loaded === false) return "";
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
  const type = $("input[name='watermarkType']:checked").value;
  const image = $("#watermarkImagePreview").getAttribute("src") || "";
  if ((type === "image" && !image) || (type === "text" && !els.watermarkText.value.trim())) {
    showToast(type === "image" ? "Filigran için bir görsel seçin" : "Filigran metnini yazın");
    return;
  }
  state.settings.watermark = {
    enabled: true,
    type,
    image,
    text: els.watermarkText.value.trim(),
    opacity: Number(els.wmOpacity.value),
    size: Number(els.wmSize.value),
    angle: Number(els.wmAngle.value),
    color: els.wmColor.value,
  };
  els.watermarkToggle.checked = true;
  closeModal(els.watermarkModal);
}

function openWatermarkModal() {
  const wm = state.settings.watermark;
  $("input[name='watermarkType'][value='text']").checked = wm.type !== "image";
  $("input[name='watermarkType'][value='image']").checked = wm.type === "image";
  els.watermarkText.value = wm.text;
  els.wmOpacity.value = wm.opacity;
  els.wmSize.value = Math.min(100, wm.size);
  els.wmAngle.value = wm.angle;
  els.wmColor.value = wm.color;
  if (wm.image) $("#watermarkImagePreview").src = wm.image;
  else $("#watermarkImagePreview").removeAttribute("src");
  $("#watermarkImagePreview").classList.toggle("hidden", !wm.image);
  updateWatermarkType();
  updateWatermarkLabels();
  openModal(els.watermarkModal);
}

function updateWatermarkType() {
  const isImage = $("input[name='watermarkType']:checked").value === "image";
  els.watermarkText.classList.toggle("hidden", isImage);
  $("#watermarkImageWrap").classList.toggle("hidden", !isImage);
  els.wmColor.closest("label").classList.toggle("hidden", isImage);
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
  if (!state.questions.some((q) => q.loaded !== false)) {
    showToast("Önce soruları ekleyin. Kırpma aracında Yükle düğmesini kullanın.");
    return;
  }
  const count = state.examKind === "sheet" ? 0 : Number(els.groupName.value);
  const groups = [2, 4].includes(count) ? ["A", "B", "C", "D"].slice(0, count) : [""];
  state.documentVariants = groups.map((group, index) => ({ group, questions: createBookletQuestions(index) }));
  state.documentGroup = groups[0];
  $("#docGroupWrap").classList.toggle("hidden", groups.length === 1);
  $("#docGroupSelect").innerHTML = groups.map((g) => `<option value="${g}">${g} Kitapçığı</option>`).join("");
  await refreshDocumentPreview();
}

function createBookletQuestions(variant) {
  if (!variant) return state.questions.slice();
  return getQuestionSections().flatMap(({ questions }) => {
    // A shared passage and its following questions travel together between booklets.
    const bundles = [];
    let passage = null;
    for (const question of questions) {
      if (question.asDescription) { passage = [question]; bundles.push(passage); }
      else if (passage) passage.push(question);
      else bundles.push([question]);
    }
    if (bundles.length < 2) return questions.slice();
    const shift = variant % bundles.length;
    return bundles.slice(shift).concat(bundles.slice(0, shift)).flat();
  });
}

function currentDocumentQuestions() {
  return state.documentVariants.find((v) => v.group === state.documentGroup)?.questions || state.questions;
}

function getDocumentTitle() {
  const title = els.testTitle.value.trim() || "MATEMATİK";
  return state.settings.printOptions.preserveTitleCase ? title : title.toLocaleUpperCase("tr-TR");
}

function setDocumentBusy(busy) {
  [els.downloadDocBtn, els.sideDownloadBtn, els.sideEmailBtn, els.sidePdfEmailBtn, $("#docGroupSelect")].forEach((button) => { button.disabled = busy; });
}

async function refreshDocumentPreview() {
  const version = (state.documentRenderVersion || 0) + 1;
  state.documentRenderVersion = version;
  state.pdfExportPromise = null;
  setDocumentBusy(true);
  openModal(els.documentModal);
  try {
    const layout = getPaperLayoutMetrics();
    els.docName.textContent = getDocumentTitle();
    els.finalPaper.className = `final-paper paper-${els.paperSize.value} orientation-${els.orientation.value}`;
    els.finalPaper.style.setProperty("--paper-width", `${layout.pageWidth}px`);
    els.finalPaper.style.setProperty("--paper-height", `${layout.pageHeight}px`);
    for (const side of ["top", "right", "bottom", "left"]) els.finalPaper.style.setProperty(`--paper-margin-${side}`, `${state.settings.margins[side]}cm`);
    els.finalPaper.innerHTML = '<div class="paper-loading">Sayfalar hazırlanıyor...</div>';
    const html = await buildFinalPaperHtml();
    if (version !== state.documentRenderVersion) return;
    els.finalPaper.innerHTML = html;
    $(".doc-preview").scrollTop = 0;
    fitDocumentZoom();
    updateDocumentPageSummary();
  } catch (error) {
    console.error(error);
    els.finalPaper.innerHTML = `<div class="paper-loading">${escapeHtml(error.message || "Sayfalar hazırlanamadı")}</div>`;
    showToast("Sayfalar hazırlanamadı");
  } finally {
    if (version === state.documentRenderVersion) setDocumentBusy(false);
  }
}

function getPaperLayoutMetrics() {
  const sizes = { a4: [210, 297], a5: [148, 210] };
  let [widthMm, heightMm] = sizes[els.paperSize.value] || sizes.a4;
  if (els.orientation.value === "landscape") [widthMm, heightMm] = [heightMm, widthMm];
  const pxPerMm = 96 / 25.4;
  const m = state.settings.margins;
  const contentWidth = (widthMm - 10 * (m.left + m.right)) * pxPerMm;
  const contentHeight = (heightMm - 10 * (m.top + m.bottom)) * pxPerMm;
  if (contentWidth < 100 || contentHeight < 160) throw new Error("Kenar boşluklarını küçültün; sorular için yeterli alan kalmadı.");
  const columns = Number(els.columnCount.value) || 2;
  return { widthMm, heightMm, pxPerMm, pageWidth: widthMm * pxPerMm, pageHeight: heightMm * pxPerMm, contentWidth, contentHeight, columns, columnGap: 18, columnWidth: (contentWidth - 18 * (columns - 1)) / columns };
}

function buildDocumentMeta() {
  const options = state.settings.printOptions;
  const exam = state.examKind === "written" ? (els.writtenType.value === "custom" ? els.customExamTitle.value.trim() : els.writtenType.value) : els.descriptionField.value.trim();
  const group = state.documentGroup ? `${state.documentGroup} Kitapçığı` : (state.examKind !== "sheet" && !["Grup Yok", "2", "4"].includes(els.groupName.value) ? els.groupName.value : "");
  const items = [
    els.schoolName.value.trim(), exam,
    els.className.value.trim() ? `Sınıf/Şube: ${els.className.value.trim()}` : "",
    !options.hideBooklet ? group : "",
    state.examKind !== "sheet" && els.includeTeacher.checked ? `Öğretmen: ${els.teacherName.value.trim() || "__________________"}` : "",
  ].filter(Boolean);
  return items.length ? `<section class="final-meta ${options.compactMeta ? "compact" : ""} ${options.centerMeta ? "centered" : ""}">${items.map((text) => `<span>${escapeHtml(text)}</span>`).join("")}</section>` : "";
}

function buildWatermarkHtml(layout) {
  const wm = state.settings.watermark;
  if (!wm.enabled || (wm.type === "image" ? !wm.image : !wm.text)) return "";
  const angle = state.settings.printOptions.negativeWatermark ? -Math.abs(wm.angle) : wm.angle;
  const size = clamp(wm.size, 10, 100) / 100;
  const style = `opacity:${wm.opacity / 100};transform:translate(-50%,-50%) rotate(${angle}deg);width:${layout.contentWidth * size}px;color:${wm.color}`;
  if (wm.type === "image") return `<div class="paper-watermark" style="${style}"><img src="${wm.image}" alt="" /></div>`;
  const ctx = document.createElement("canvas").getContext("2d");
  ctx.font = "700 100px Arial";
  const fontSize = Math.min(120, layout.contentWidth * size * 100 / Math.max(1, ctx.measureText(wm.text).width));
  return `<div class="paper-watermark" style="${style};font-size:${fontSize}px">${escapeHtml(wm.text)}</div>`;
}

async function buildFinalPaperHtml() {
  const layout = getPaperLayoutMetrics();
  const title = `<h1 class="final-title"><span>${escapeHtml(getDocumentTitle())}</span></h1>`;
  const meta = buildDocumentMeta();
  const measure = document.createElement("div");
  measure.className = "print-measure";
  document.body.appendChild(measure);
  try {
    await document.fonts.ready;
    const measureHtml = async (html, width) => {
      measure.style.width = `${width}px`;
      measure.innerHTML = html;
      await Promise.all(Array.from(measure.querySelectorAll("img"), (img) => img.decode()));
      const element = measure.firstElementChild;
      const css = getComputedStyle(element);
      return { height: element.getBoundingClientRect().height + parseFloat(css.marginTop || 0) + parseFloat(css.marginBottom || 0), element };
    };
    const headerHeight = (await measureHtml(title, layout.contentWidth)).height;
    const metaHeight = meta ? (await measureHtml(meta, layout.contentWidth)).height : 0;
    layout.firstPageHeight = layout.contentHeight - headerHeight - metaHeight - 18;
    layout.nextPageHeight = layout.contentHeight - headerHeight - 18;
    if (layout.firstPageHeight < 70) throw new Error("Başlık ve açıklama çok uzun. Açıklamayı veya kenar boşluklarını kısaltın.");
    const items = await buildPrintableQuestionItems(layout, measureHtml);
    const pages = paginatePrintableItems(items, layout);
    const footerText = state.settings.printOptions.lineTextToggle ? state.settings.printOptions.lineTextValue : "";
    return pages.map((page, index) => `<section class="paper-page" data-page="${index + 1}">${title}${index === 0 ? meta : ""}<div class="paper-content">${renderPrintablePageSections(page.sections, layout.columns)}</div>${buildWatermarkHtml(layout)}<footer>${footerText ? `<small>${escapeHtml(footerText)}</small>` : ""}<span>${index + 1}</span></footer></section>`).join("");
  } finally { measure.remove(); }
}

async function buildPrintableQuestionItems(layout, measureHtml) {
  const questions = currentDocumentQuestions();
  const numbers = getQuestionNumberMap(questions, false);
  const items = [];
  for (const info of getQuestionSections(questions)) {
    const { section, start } = info;
    const visible = info.questions.filter((q) => q.loaded !== false);
    if (!visible.length) continue;
    if (shouldShowSections()) {
      const html = section.title.trim() ? `<section class="final-section-title">${escapeHtml(section.title)}</section>` : "";
      items.push({ html, sectionStart: true, keepWithNext: true, fullWidth: section.newPage || layout.columns === 1, forceNewPage: start > 0 && section.newPage, estimatedHeight: html ? (await measureHtml(html, layout.columnWidth)).height : 0 });
    }
    for (const q of visible) {
      const number = numbers.get(q.id) || "";
      const width = q.expanded ? layout.contentWidth : layout.columnWidth;
      const gap = getQuestionGap(q);
      const gapCss = q.customGap || state.settings.globalGap > 0 ? `${gap}mm` : "12px";
      const numberHtml = q.asDescription ? "" : `<b class="printed-question-number">${escapeHtml(number)}.</b>`;
      const content = q.kind === "manual" ? `<div class="printed-content">${q.html}</div>` : `<img src="${q.src}" alt="${escapeHtml(number)}. soru" />`;
      let html = `<article class="final-question ${q.expanded ? "expanded" : ""} ${q.asDescription ? "description" : ""}" data-question-id="${q.id}" style="--question-gap:${gapCss}">${numberHtml}${content}</article>`;
      let result = await measureHtml(html, width);
      // Fit only a source that is taller than a complete page.
      if (result.height > layout.nextPageHeight) {
        const available = Math.max(40, layout.nextPageHeight - gap * layout.pxPerMm - 40);
        const img = result.element.querySelector(":scope > img");
        if (img) img.style.cssText = `width:auto;max-width:100%;height:auto;max-height:${available}px;object-fit:contain`;
        else {
          const contentNode = result.element.querySelector(".printed-content");
          const canvas = await html2canvas(contentNode, { scale: 1.5, logging: false, backgroundColor: "#ffffff" });
          contentNode.innerHTML = `<img src="${canvas.toDataURL("image/png")}" style="width:auto;max-width:100%;max-height:${available}px;object-fit:contain" alt="" />`;
        }
        html = result.element.outerHTML;
        result = await measureHtml(html, width);
      }
      items.push({ html, fullWidth: Boolean(q.expanded), keepWithNext: Boolean(q.asDescription), estimatedHeight: result.height });
    }
  }
  for (const info of getQuestionSections(questions)) {
    const real = info.questions.filter((q) => q.loaded !== false && !q.asDescription);
    const sectionName = info.section.title ? ` · ${escapeHtml(info.section.title)}` : "";
    if (els.includeAnswerKey.checked) {
      for (let i = 0; i < real.length; i += 40) {
        const text = real.slice(i, i + 40).map((q) => `${numbers.get(q.id)}: ${q.answer || "-"}`).join("   ");
        const html = `<section class="final-extra final-answer-key"><b>Cevap Anahtarı${sectionName}</b><p>${escapeHtml(text)}</p></section>`;
        items.push({ html, fullWidth: true, estimatedHeight: (await measureHtml(html, layout.contentWidth)).height });
      }
    }
    if (els.includeOptic.checked) {
      for (let i = 0; i < real.length; i += 30) {
        const rows = real.slice(i, i + 30).map((q) => `<div><span>${escapeHtml(numbers.get(q.id))}</span>${["A","B","C","D","E"].map((a) => `<em>${a}</em>`).join("")}</div>`).join("");
        const html = `<section class="final-optic"><b>Optik Form${sectionName}</b>${rows}</section>`;
        items.push({ html, fullWidth: true, estimatedHeight: (await measureHtml(html, layout.contentWidth)).height });
      }
    }
  }
  return items;
}

function createPrintPage(layout, index) {
  return { sections: [], columnHeights: Array(layout.columns).fill(0), maxHeight: index === 0 ? layout.firstPageHeight : layout.nextPageHeight };
}

function paginatePrintableItems(items, layout) {
  const pages = [createPrintPage(layout, 0)];
  let flowColumn = 0;
  const addPage = () => { const page = createPrintPage(layout, pages.length); pages.push(page); flowColumn = 0; return page; };
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    let page = pages[pages.length - 1];
    if (item.forceNewPage && page.sections.length) page = addPage();
    let needed = item.estimatedHeight;
    let follower = i;
    while (items[follower]?.keepWithNext && items[follower + 1] && !items[follower + 1].forceNewPage) needed += items[++follower].estimatedHeight;
    if (needed > layout.nextPageHeight) needed = item.estimatedHeight;
    if (item.fullWidth) {
      let used = Math.max(...page.columnHeights);
      if (used + needed > page.maxHeight && (used > 0 || pages.length === 1)) { page = addPage(); used = 0; }
      if (item.html) page.sections.push({ type: "full", html: item.html });
      page.columnHeights.fill(used + item.estimatedHeight);
      flowColumn = 0;
      continue;
    }
    let col = els.smartLayout.checked ? indexOfShortestColumn(page.columnHeights) : flowColumn;
    if (item.sectionStart && page.columnHeights[col] > 0) col++;
    if (col >= layout.columns) { page = addPage(); col = 0; }
    if (page.columnHeights[col] + needed > page.maxHeight) {
      let next = col + 1;
      while (next < layout.columns && page.columnHeights[next] + needed > page.maxHeight) next++;
      if (next < layout.columns) col = next;
      else { page = addPage(); col = 0; }
    }
    let band = page.sections[page.sections.length - 1];
    if (band?.type !== "columns") {
      band = { type: "columns", columns: Array.from({ length: layout.columns }, () => []) };
      page.sections.push(band);
    }
    band.columns[col].push(item.html);
    page.columnHeights[col] += item.estimatedHeight;
    flowColumn = col;
  }
  return pages.filter((p) => p.sections.length);
}

function getPrintableQuestions(questions = state.questions) {
  return questions.filter((q) => !q.asDescription && q.loaded !== false);
}

function renderPrintablePageSections(sections, columns) {
  return sections.map((s) => s.type === "full" ? s.html : `<section class="final-questions columns-${columns}">${s.columns.map((c) => `<div class="final-column">${c.join("")}</div>`).join("")}</section>`).join("");
}

function indexOfShortestColumn(values) {
  return values.indexOf(Math.min(...values));
}

function updateDocumentPageSummary() {
  const pages = Array.from(els.finalPaper.querySelectorAll(".paper-page"));
  if (!pages.length) return;
  const rect = $(".doc-preview").getBoundingClientRect();
  const midpoint = rect.top + Math.min(rect.height / 2, 200);
  let current = 1;
  pages.forEach((page, index) => { if (page.getBoundingClientRect().top <= midpoint) current = index + 1; });
  els.docPageStatus.innerHTML = `Sayfa: <b>${current}</b> / ${pages.length}`;
  els.docInfoLine.textContent = `${pages.length} sayfa · ${els.paperSize.value.toUpperCase()}`;
}

function setDocumentZoom(value, announce = true) {
  state.docZoom = clamp(value, 0.15, 2);
  els.finalPaper.style.zoom = state.docZoom;
  els.finalPaper.style.transform = "none";
  if (announce) showToast(`Önizleme %${Math.round(state.docZoom * 100)}`);
}

function fitDocumentZoom() {
  setDocumentZoom(Math.min(1, ($(".doc-preview").clientWidth - 36) / getPaperLayoutMetrics().pageWidth), false);
}

function getDocumentExport() {
  const title = getDocumentTitle();
  const suffix = state.documentGroup ? `-${state.documentGroup}` : "";
  const filename = `${getSafeDocumentBaseName(title) || "sinav"}${suffix}.html`;
  const html = `<!doctype html><meta charset="utf-8"><title>${escapeHtml(title)}</title><style>${getExportStyles()}</style>${els.finalPaper.outerHTML}`;
  return { filename, html, title };
}

async function downloadDocumentPdf() {
  try {
    // Request the location while the original click still grants user activation.
    let handle = null;
    if (window.showSaveFilePicker) {
      try {
        handle = await window.showSaveFilePicker({
          suggestedName: getDocumentExport().filename.replace(/\.html$/, ".pdf"),
          types: [{ description: "PDF sınav dokümanı", accept: { "application/pdf": [".pdf"] } }],
        });
      } catch (error) {
        if (error.name === "AbortError") throw error;
        console.warn("Native save dialog unavailable", error);
      }
    }
    setDocumentBusy(true);
    showToast("PDF hazırlanıyor");
    const { filename, pdfBytes } = await createDocumentPdfFile();
    if (handle) {
      const writable = await handle.createWritable();
      await writable.write(new Blob([pdfBytes], { type: "application/pdf" }));
      await writable.close();
      showToast("PDF kaydedildi");
    } else { downloadFile(filename, "application/pdf", pdfBytes); showToast("PDF indirildi"); }
  } catch (error) {
    if (error.name !== "AbortError") console.error(error);
    showToast(error.name === "AbortError" ? "Kaydetme iptal edildi" : "PDF kaydedilemedi. Yeniden deneyin.");
  } finally { setDocumentBusy(false); }
}

async function createDocumentPdfFile() {
  if (state.pdfExportPromise) return state.pdfExportPromise;
  state.pdfExportPromise = (async () => {
    if (!window.html2canvas || !window.jspdf) throw new Error("PDF araçları yüklenemedi");
    const { title, filename: htmlName } = getDocumentExport();
    const filename = htmlName.replace(/\.html$/, ".pdf");
    const layout = getPaperLayoutMetrics();
    const targets = Array.from(els.finalPaper.querySelectorAll(".paper-page"));
    if (!targets.length) throw new Error("Önce kağıdı hazırlayın");
    const pdf = new window.jspdf.jsPDF({ orientation: els.orientation.value, unit: "mm", format: [layout.widthMm, layout.heightMm], compress: true });
    pdf.setProperties({ title, creator: "Key Test Hazırlayıcı" });
    for (let i = 0; i < targets.length; i++) {
      const canvas = await renderPaperElementToCanvas(targets[i]);
      if (i) pdf.addPage([layout.widthMm, layout.heightMm], els.orientation.value);
      pdf.addImage(canvas, "JPEG", 0, 0, layout.widthMm, layout.heightMm, undefined, "FAST");
      canvas.width = canvas.height = 1;
    }
    const pdfBytes = new Uint8Array(pdf.output("arraybuffer"));
    return { title, filename, pdfBytes, file: new File([pdfBytes], filename, { type: "application/pdf" }) };
  })().catch((error) => { state.pdfExportPromise = null; throw error; });
  return state.pdfExportPromise;
}

async function renderFinalPaperToCanvases() {
  const result = [];
  for (const page of els.finalPaper.querySelectorAll(".paper-page")) result.push(await renderPaperElementToCanvas(page));
  return result;
}

async function renderPaperElementToCanvas(paper) {
  await Promise.all(Array.from(paper.querySelectorAll("img"), (img) => img.decode()));
  return html2canvas(paper, {
    scale: 2, backgroundColor: "#ffffff", logging: false, width: paper.offsetWidth, height: paper.offsetHeight,
    windowWidth: Math.max(1280, window.innerWidth), windowHeight: Math.max(1200, paper.offsetHeight),
    onclone: (doc) => {
      const finalPaper = doc.getElementById("finalPaper");
      finalPaper.style.transform = "none";
      finalPaper.style.zoom = "1";
      doc.querySelectorAll(".doc-preview,.doc-body,.document-modal").forEach((el) => { el.style.overflow = "visible"; el.scrollTop = el.scrollLeft = 0; });
      doc.querySelectorAll(".paper-page").forEach((el) => { el.style.boxShadow = "none"; });
    },
  });
}

function loadImageFromSrc(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Soru görseli PDF'e eklenemedi"));
    image.src = src;
  });
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
  try {
    localStorage.setItem(storageKey, JSON.stringify(payload));
  } catch (error) {
    console.warn("Local draft storage unavailable", error);
  }
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
  const settings = draft.settings || {};
  state.settings = {
    ...state.settings, ...settings,
    margins: { ...state.settings.margins, ...settings.margins },
    watermark: { ...state.settings.watermark, ...settings.watermark },
    printOptions: { ...state.settings.printOptions, ...settings.printOptions },
  };
  state.questions.forEach((question) => { question.loaded = true; });
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
    customExamTitle: els.customExamTitle.value,
    teacherName: els.teacherName.value,
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
  if (modal === els.watermarkModal) els.watermarkToggle.checked = state.settings.watermark.enabled;
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
