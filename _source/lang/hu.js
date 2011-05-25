﻿/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Hungarian language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Constains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang[ 'hu' ] = {
	/**
	 * The language reading direction. Possible values are "rtl" for
	 * Right-To-Left languages (like Arabic) and "ltr" for Left-To-Right
	 * languages (like English).
	 * @default 'ltr'
	 */
	dir: 'ltr',

	/*
	 * Screenreader titles. Please note that screenreaders are not always capable
	 * of reading non-English words. So be careful while translating it.
	 */
	editorTitle: 'HTML szerkesztő',

	// ARIA descriptions.
	toolbars: 'Editor toolbars', // MISSING
	editor: 'HTML szerkesztő',

	// Toolbar buttons without dialogs.
	source: 'Forráskód',
	newPage: 'Új oldal',
	save: 'Mentés',
	preview: 'Előnézet',
	cut: 'Kivágás',
	copy: 'Másolás',
	paste: 'Beillesztés',
	print: 'Nyomtatás',
	underline: 'Aláhúzott',
	bold: 'Félkövér',
	italic: 'Dőlt',
	selectAll: 'Mindent kijelöl',
	removeFormat: 'Formázás eltávolítása',
	strike: 'Áthúzott',
	subscript: 'Alsó index',
	superscript: 'Felső index',
	horizontalrule: 'Elválasztóvonal beillesztése',
	pagebreak: 'Oldaltörés beillesztése',
	pagebreakAlt: 'Page Break', // MISSING
	unlink: 'Hivatkozás törlése',
	undo: 'Visszavonás',
	redo: 'Ismétlés',

	// Common messages and labels.
	common: {
		browseServer: 'Böngészés a szerveren',
		url: 'Hivatkozás',
		protocol: 'Protokoll',
		upload: 'Feltöltés',
		uploadSubmit: 'Küldés a szerverre',
		image: 'Kép',
		flash: 'Flash',
		form: 'Űrlap',
		checkbox: 'Jelölőnégyzet',
		radio: 'Választógomb',
		textField: 'Szövegmező',
		textarea: 'Szövegterület',
		hiddenField: 'Rejtettmező',
		button: 'Gomb',
		select: 'Legördülő lista',
		imageButton: 'Képgomb',
		notSet: '<nincs beállítva>',
		id: 'Azonosító',
		name: 'Név',
		langDir: 'Írás iránya',
		langDirLtr: 'Balról jobbra',
		langDirRtl: 'Jobbról balra',
		langCode: 'Nyelv kódja',
		longDescr: 'Részletes leírás webcíme',
		cssClass: 'Stíluskészlet',
		advisoryTitle: 'Súgócimke',
		cssStyle: 'Stílus',
		ok: 'Rendben',
		cancel: 'Mégsem',
		close: 'Bezárás',
		preview: 'Előnézet',
		generalTab: 'Általános',
		advancedTab: 'További opciók',
		validateNumberFailed: 'A mezőbe csak számokat írhat.',
		confirmNewPage: 'Minden nem mentett változás el fog veszni! Biztosan be szeretné tölteni az oldalt?',
		confirmCancel: 'Az űrlap tartalma megváltozott, ám a változásokat nem rögzítette. Biztosan be szeretné zárni az űrlapot?',
		options: 'Beállítások',
		target: 'Cél',
		targetNew: 'Új ablak (_blank)',
		targetTop: 'Legfelső ablak (_top)',
		targetSelf: 'Aktuális ablakban (_self)',
		targetParent: 'Szülő ablak (_parent)',
		langDirLTR: 'Balról jobbra (LTR)',
		langDirRTL: 'Jobbról balra (RTL)',
		styles: 'Stílus',
		cssClasses: 'Stíluslap osztály',
		width: 'Szélesség',
		height: 'Magasság',
		align: 'Igazítás',
		alignLeft: 'Bal',
		alignRight: 'Jobbra',
		alignCenter: 'Középre',
		alignTop: 'Tetejére',
		alignMiddle: 'Középre',
		alignBottom: 'Aljára',
		invalidHeight: 'A magasság mezőbe csak számokat írhat.',
		invalidWidth: 'A szélesség mezőbe csak számokat írhat.',
		invalidCssLength: 'Value must be a valid CSS length unit.', // MISSING
		invalidHtmlLength: 'Value must be either a number in unit of pixel, or a percentage value', // MISSING

		// Put the voice-only part of the label in the span.
		unavailable: '%1<span class="cke_accessibility">, unavailable</span>' // MISSING
	},

	contextmenu: {
		options: 'Helyi menü opciók'
	},

	// Special char dialog.
	specialChar: {
		toolbar: 'Speciális karakter beillesztése',
		title: 'Speciális karakter választása',
		options: 'Speciális karakter opciók'
	},

	// Link dialog.
	link: {
		toolbar: 'Hivatkozás beillesztése/módosítása',
		other: '<más>',
		menu: 'Hivatkozás módosítása',
		title: 'Hivatkozás tulajdonságai',
		info: 'Alaptulajdonságok',
		target: 'Tartalom megjelenítése',
		upload: 'Feltöltés',
		advanced: 'További opciók',
		type: 'Hivatkozás típusa',
		toUrl: 'URL',
		toAnchor: 'Horgony az oldalon',
		toEmail: 'E-Mail',
		targetFrame: '<keretben>',
		targetPopup: '<felugró ablakban>',
		targetFrameName: 'Keret neve',
		targetPopupName: 'Felugró ablak neve',
		popupFeatures: 'Felugró ablak jellemzői',
		popupResizable: 'Átméretezés',
		popupStatusBar: 'Állapotsor',
		popupLocationBar: 'Címsor',
		popupToolbar: 'Eszköztár',
		popupMenuBar: 'Menü sor',
		popupFullScreen: 'Teljes képernyő (csak IE)',
		popupScrollBars: 'Gördítősáv',
		popupDependent: 'Szülőhöz kapcsolt (csak Netscape)',
		popupLeft: 'Bal pozíció',
		popupTop: 'Felső pozíció',
		id: 'Id',
		langDir: 'Írás iránya',
		langDirLTR: 'Balról jobbra',
		langDirRTL: 'Jobbról balra',
		acccessKey: 'Billentyűkombináció',
		name: 'Név',
		langCode: 'Írás iránya',
		tabIndex: 'Tabulátor index',
		advisoryTitle: 'Súgócimke',
		advisoryContentType: 'Súgó tartalomtípusa',
		cssClasses: 'Stíluskészlet',
		charset: 'Hivatkozott tartalom kódlapja',
		styles: 'Stílus',
		rel: 'Relationship', // MISSING
		selectAnchor: 'Horgony választása',
		anchorName: 'Horgony név szerint',
		anchorId: 'Azonosító szerint',
		emailAddress: 'E-Mail cím',
		emailSubject: 'Üzenet tárgya',
		emailBody: 'Üzenet',
		noAnchors: '(Nincs horgony a dokumentumban)',
		noUrl: 'Adja meg a hivatkozás webcímét',
		noEmail: 'Adja meg az E-Mail címet'
	},

	// Anchor dialog
	anchor: {
		toolbar: 'Horgony beillesztése/szerkesztése',
		menu: 'Horgony tulajdonságai',
		title: 'Horgony tulajdonságai',
		name: 'Horgony neve',
		errorName: 'Kérem adja meg a horgony nevét',
		remove: 'Remove Anchor' // MISSING
	},

	// List style dialog
	list: {
		numberedTitle: 'Sorszámozott lista tulajdonságai',
		bulletedTitle: 'Pontozott lista tulajdonságai',
		type: 'Típus',
		start: 'Kezdőszám',
		validateStartNumber: 'A kezdőszám nem lehet tört érték.',
		circle: 'Kör',
		disc: 'Korong',
		square: 'Négyzet',
		none: 'Nincs',
		notset: '<Nincs beállítva>',
		armenian: 'Örmény számozás',
		georgian: 'Grúz számozás (an, ban, gan, stb.)',
		lowerRoman: 'Római kisbetűs (i, ii, iii, iv, v, stb.)',
		upperRoman: 'Római nagybetűs (I, II, III, IV, V, stb.)',
		lowerAlpha: 'Kisbetűs (a, b, c, d, e, stb.)',
		upperAlpha: 'Nagybetűs (A, B, C, D, E, stb.)',
		lowerGreek: 'Görög (alpha, beta, gamma, stb.)',
		decimal: 'Arab számozás (1, 2, 3, stb.)',
		decimalLeadingZero: 'Számozás bevezető nullákkal (01, 02, 03, stb.)'
	},

	// Find And Replace Dialog
	findAndReplace: {
		title: 'Keresés és csere',
		find: 'Keresés',
		replace: 'Csere',
		findWhat: 'Keresett szöveg:',
		replaceWith: 'Csere erre:',
		notFoundMsg: 'A keresett szöveg nem található.',
		matchCase: 'kis- és nagybetű megkülönböztetése',
		matchWord: 'csak ha ez a teljes szó',
		matchCyclic: 'Ciklikus keresés',
		replaceAll: 'Az összes cseréje',
		replaceSuccessMsg: '%1 egyezőség cserélve.'
	},

	// Table Dialog
	table: {
		toolbar: 'Táblázat',
		title: 'Táblázat tulajdonságai',
		menu: 'Táblázat tulajdonságai',
		deleteTable: 'Táblázat törlése',
		rows: 'Sorok',
		columns: 'Oszlopok',
		border: 'Szegélyméret',
		widthPx: 'képpont',
		widthPc: 'százalék',
		widthUnit: 'Szélesség egység',
		cellSpace: 'Cella térköz',
		cellPad: 'Cella belső margó',
		caption: 'Felirat',
		summary: 'Leírás',
		headers: 'Fejlécek',
		headersNone: 'Nincsenek',
		headersColumn: 'Első oszlop',
		headersRow: 'Első sor',
		headersBoth: 'Mindkettő',
		invalidRows: 'A sorok számának nagyobbnak kell lenni mint 0.',
		invalidCols: 'Az oszlopok számának nagyobbnak kell lenni mint 0.',
		invalidBorder: 'A szegélyméret mezőbe csak számokat írhat.',
		invalidWidth: 'A szélesség mezőbe csak számokat írhat.',
		invalidHeight: 'A magasság mezőbe csak számokat írhat.',

		cell: {
			menu: 'Cella',
			insertBefore: 'Beszúrás balra',
			insertAfter: 'Beszúrás jobbra',
			deleteCell: 'Cellák törlése',
			merge: 'Cellák egyesítése',
			mergeRight: 'Cellák egyesítése jobbra',
			mergeDown: 'Cellák egyesítése lefelé',
			splitHorizontal: 'Cellák szétválasztása vízszintesen',
			splitVertical: 'Cellák szétválasztása függőlegesen',
			title: 'Cella tulajdonságai',
			cellType: 'Cella típusa',
			rowSpan: 'Függőleges egyesítés',
			colSpan: 'Vízszintes egyesítés',
			wordWrap: 'Hosszú sorok törése',
			hAlign: 'Vízszintes igazítás',
			vAlign: 'Függőleges igazítás',
			alignBaseline: 'Alapvonalra',
			bgColor: 'Háttér színe',
			borderColor: 'Keret színe',
			data: 'Adat',
			header: 'Fejléc',
			yes: 'Igen',
			no: 'Nem',
			invalidWidth: 'A szélesség mezőbe csak számokat írhat.',
			invalidHeight: 'A magasság mezőbe csak számokat írhat.',
			invalidRowSpan: 'A függőleges egyesítés mezőbe csak számokat írhat.',
			invalidColSpan: 'A vízszintes egyesítés mezőbe csak számokat írhat.',
			chooseColor: 'Válasszon'
		},

		row: {
			menu: 'Sor',
			insertBefore: 'Beszúrás fölé',
			insertAfter: 'Beszúrás alá',
			deleteRow: 'Sorok törlése'
		},

		column: {
			menu: 'Oszlop',
			insertBefore: 'Beszúrás balra',
			insertAfter: 'Beszúrás jobbra',
			deleteColumn: 'Oszlopok törlése'
		}
	},

	// Button Dialog.
	button: {
		title: 'Gomb tulajdonságai',
		text: 'Szöveg (Érték)',
		type: 'Típus',
		typeBtn: 'Gomb',
		typeSbm: 'Küldés',
		typeRst: 'Alaphelyzet'
	},

	// Checkbox and Radio Button Dialogs.
	checkboxAndRadio: {
		checkboxTitle: 'Jelölőnégyzet tulajdonságai',
		radioTitle: 'Választógomb tulajdonságai',
		value: 'Érték',
		selected: 'Kiválasztott'
	},

	// Form Dialog.
	form: {
		title: 'Űrlap tulajdonságai',
		menu: 'Űrlap tulajdonságai',
		action: 'Adatfeldolgozást végző hivatkozás',
		method: 'Adatküldés módja',
		encoding: 'Kódolás'
	},

	// Select Field Dialog.
	select: {
		title: 'Legördülő lista tulajdonságai',
		selectInfo: 'Alaptulajdonságok',
		opAvail: 'Elérhető opciók',
		value: 'Érték',
		size: 'Méret',
		lines: 'sor',
		chkMulti: 'több sor is kiválasztható',
		opText: 'Szöveg',
		opValue: 'Érték',
		btnAdd: 'Hozzáad',
		btnModify: 'Módosít',
		btnUp: 'Fel',
		btnDown: 'Le',
		btnSetValue: 'Legyen az alapértelmezett érték',
		btnDelete: 'Töröl'
	},

	// Textarea Dialog.
	textarea: {
		title: 'Szövegterület tulajdonságai',
		cols: 'Karakterek száma egy sorban',
		rows: 'Sorok száma'
	},

	// Text Field Dialog.
	textfield: {
		title: 'Szövegmező tulajdonságai',
		name: 'Név',
		value: 'Érték',
		charWidth: 'Megjelenített karakterek száma',
		maxChars: 'Maximális karakterszám',
		type: 'Típus',
		typeText: 'Szöveg',
		typePass: 'Jelszó'
	},

	// Hidden Field Dialog.
	hidden: {
		title: 'Rejtett mező tulajdonságai',
		name: 'Név',
		value: 'Érték'
	},

	// Image Dialog.
	image: {
		title: 'Kép tulajdonságai',
		titleButton: 'Képgomb tulajdonságai',
		menu: 'Kép tulajdonságai',
		infoTab: 'Alaptulajdonságok',
		btnUpload: 'Küldés a szerverre',
		upload: 'Feltöltés',
		alt: 'Buborék szöveg',
		lockRatio: 'Arány megtartása',
		resetSize: 'Eredeti méret',
		border: 'Keret',
		hSpace: 'Vízsz. táv',
		vSpace: 'Függ. táv',
		alertUrl: 'Töltse ki a kép webcímét',
		linkTab: 'Hivatkozás',
		button2Img: 'A kiválasztott képgombból sima képet szeretne csinálni?',
		img2Button: 'A kiválasztott képből képgombot szeretne csinálni?',
		urlMissing: 'Hiányzik a kép URL-je',
		validateBorder: 'A keret méretének egész számot kell beírni!',
		validateHSpace: 'Vízszintes távolságnak egész számot kell beírni!',
		validateVSpace: 'Függőleges távolságnak egész számot kell beírni!'
	},

	// Flash Dialog
	flash: {
		properties: 'Flash tulajdonságai',
		propertiesTab: 'Tulajdonságok',
		title: 'Flash tulajdonságai',
		chkPlay: 'Automata lejátszás',
		chkLoop: 'Folyamatosan',
		chkMenu: 'Flash menü engedélyezése',
		chkFull: 'Teljes képernyő engedélyezése',
		scale: 'Méretezés',
		scaleAll: 'Mindent mutat',
		scaleNoBorder: 'Keret nélkül',
		scaleFit: 'Teljes kitöltés',
		access: 'Szkript hozzáférés',
		accessAlways: 'Mindig',
		accessSameDomain: 'Azonos domainről',
		accessNever: 'Soha',
		alignAbsBottom: 'Legaljára',
		alignAbsMiddle: 'Közepére',
		alignBaseline: 'Alapvonalhoz',
		alignTextTop: 'Szöveg tetejére',
		quality: 'Minőség',
		qualityBest: 'Legjobb',
		qualityHigh: 'Jó',
		qualityAutoHigh: 'Automata jó',
		qualityMedium: 'Közepes',
		qualityAutoLow: 'Automata gyenge',
		qualityLow: 'Gyenge',
		windowModeWindow: 'Window',
		windowModeOpaque: 'Opaque',
		windowModeTransparent: 'Transparent',
		windowMode: 'Ablak mód',
		flashvars: 'Flash változók',
		bgcolor: 'Háttérszín',
		hSpace: 'Vízsz. táv',
		vSpace: 'Függ. táv',
		validateSrc: 'Adja meg a hivatkozás webcímét',
		validateHSpace: 'A vízszintes távolsűág mezőbe csak számokat írhat.',
		validateVSpace: 'A függőleges távolsűág mezőbe csak számokat írhat.'
	},

	// Speller Pages Dialog
	spellCheck: {
		toolbar: 'Helyesírás-ellenőrzés',
		title: 'Helyesírás ellenörző',
		notAvailable: 'Sajnálom, de a szolgáltatás jelenleg nem elérhető.',
		errorLoading: 'Hiba a szolgáltatás host betöltése közben: %s.',
		notInDic: 'Nincs a szótárban',
		changeTo: 'Módosítás',
		btnIgnore: 'Kihagyja',
		btnIgnoreAll: 'Mindet kihagyja',
		btnReplace: 'Csere',
		btnReplaceAll: 'Összes cseréje',
		btnUndo: 'Visszavonás',
		noSuggestions: 'Nincs javaslat',
		progress: 'Helyesírás-ellenőrzés folyamatban...',
		noMispell: 'Helyesírás-ellenőrzés kész: Nem találtam hibát',
		noChanges: 'Helyesírás-ellenőrzés kész: Nincs változtatott szó',
		oneChange: 'Helyesírás-ellenőrzés kész: Egy szó cserélve',
		manyChanges: 'Helyesírás-ellenőrzés kész: %1 szó cserélve',
		ieSpellDownload: 'A helyesírás-ellenőrző nincs telepítve. Szeretné letölteni most?'
	},

	smiley: {
		toolbar: 'Hangulatjelek',
		title: 'Hangulatjel beszúrása',
		options: 'Hangulatjel opciók'
	},

	elementsPath: {
		eleLabel: 'Elem utak',
		eleTitle: '%1 elem'
	},

	numberedlist: 'Számozás',
	bulletedlist: 'Felsorolás',
	indent: 'Behúzás növelése',
	outdent: 'Behúzás csökkentése',

	justify: {
		left: 'Balra',
		center: 'Középre',
		right: 'Jobbra',
		block: 'Sorkizárt'
	},

	blockquote: 'Idézet blokk',

	clipboard: {
		title: 'Beillesztés',
		cutError: 'A böngésző biztonsági beállításai nem engedélyezik a szerkesztőnek, hogy végrehajtsa a kivágás műveletet. Használja az alábbi billentyűkombinációt (Ctrl/Cmd+X).',
		copyError: 'A böngésző biztonsági beállításai nem engedélyezik a szerkesztőnek, hogy végrehajtsa a másolás műveletet. Használja az alábbi billentyűkombinációt (Ctrl/Cmd+X).',
		pasteMsg: 'Másolja be az alábbi mezőbe a <STRONG>Ctrl/Cmd+V</STRONG> billentyűk lenyomásával, majd nyomjon <STRONG>Rendben</STRONG>-t.',
		securityMsg: 'A böngésző biztonsági beállításai miatt a szerkesztő nem képes hozzáférni a vágólap adataihoz. Illeszd be újra ebben az ablakban.',
		pasteArea: 'Beszúrás mező'
	},

	pastefromword: {
		confirmCleanup: 'Úgy tűnik a beillesztett szöveget Word-ből másolt át. Meg szeretné tisztítani a szöveget? (ajánlott)',
		toolbar: 'Beillesztés Word-ből',
		title: 'Beillesztés Word-ből',
		error: 'Egy belső hiba miatt nem sikerült megtisztítani a szöveget'
	},

	pasteText: {
		button: 'Beillesztés formázatlan szövegként',
		title: 'Beillesztés formázatlan szövegként'
	},

	templates: {
		button: 'Sablonok',
		title: 'Elérhető sablonok',
		options: 'Sablon opciók',
		insertOption: 'Kicseréli a jelenlegi tartalmat',
		selectPromptMsg: 'Válassza ki melyik sablon nyíljon meg a szerkesztőben<br>(a jelenlegi tartalom elveszik):',
		emptyListMsg: '(Nincs sablon megadva)'
	},

	showBlocks: 'Blokkok megjelenítése',

	stylesCombo: {
		label: 'Stílus',
		panelTitle: 'Formázási stílusok',
		panelTitle1: 'Blokk stílusok',
		panelTitle2: 'Inline stílusok',
		panelTitle3: 'Objektum stílusok'
	},

	format: {
		label: 'Formátum',
		panelTitle: 'Formátum',

		tag_p: 'Normál',
		tag_pre: 'Formázott',
		tag_address: 'Címsor',
		tag_h1: 'Fejléc 1',
		tag_h2: 'Fejléc 2',
		tag_h3: 'Fejléc 3',
		tag_h4: 'Fejléc 4',
		tag_h5: 'Fejléc 5',
		tag_h6: 'Fejléc 6',
		tag_div: 'Bekezdés (DIV)'
	},

	div: {
		title: 'DIV tároló létrehozása',
		toolbar: 'DIV tároló létrehozása',
		cssClassInputLabel: 'Stíluslap osztály',
		styleSelectLabel: 'Stílus',
		IdInputLabel: 'Azonosító',
		languageCodeInputLabel: ' Nyelv kódja',
		inlineStyleInputLabel: 'Inline stílus',
		advisoryTitleInputLabel: 'Tipp szöveg',
		langDirLabel: 'Nyelvi irány',
		langDirLTRLabel: 'Balról jobbra (LTR)',
		langDirRTLLabel: 'Jobbról balra (RTL)',
		edit: 'DIV szerkesztése',
		remove: 'DIV eltávolítása'
	},

	iframe: {
		title: 'IFrame Properties', // MISSING
		toolbar: 'IFrame', // MISSING
		noUrl: 'Please type the iframe URL', // MISSING
		scrolling: 'Enable scrollbars', // MISSING
		border: 'Show frame border' // MISSING
	},

	font: {
		label: 'Betűtípus',
		voiceLabel: 'Betűtípus',
		panelTitle: 'Betűtípus'
	},

	fontSize: {
		label: 'Méret',
		voiceLabel: 'Betűméret',
		panelTitle: 'Méret'
	},

	colorButton: {
		textColorTitle: 'Betűszín',
		bgColorTitle: 'Háttérszín',
		panelTitle: 'Színek',
		auto: 'Automatikus',
		more: 'További színek...'
	},

	colors: {
		'000': 'Fekete',
		'800000': 'Bordó',
		'8B4513': 'Barna',
		'2F4F4F': 'Sötét türkiz',
		'008080': 'Türkiz',
		'000080': 'Király kék',
		'4B0082': 'Indigó kék',
		'696969': 'Szürke',
		'B22222': 'Tégla vörös',
		'A52A2A': 'Vörös',
		'DAA520': 'Arany sárga',
		'006400': 'Sötét zöld',
		'40E0D0': 'Türkiz',
		'0000CD': 'Kék',
		'800080': 'Lila',
		'808080': 'Szürke',
		'F00': 'Piros',
		'FF8C00': 'Sötét narancs',
		'FFD700': 'Arany',
		'008000': 'Zöld',
		'0FF': 'Türkiz',
		'00F': 'Kék',
		'EE82EE': 'Rózsaszín',
		'A9A9A9': 'Sötét szürke',
		'FFA07A': 'Lazac',
		'FFA500': 'Narancs',
		'FFFF00': 'Citromsárga',
		'00FF00': 'Neon zöld',
		'AFEEEE': 'Világos türkiz',
		'ADD8E6': 'Világos kék',
		'DDA0DD': 'Világos lila',
		'D3D3D3': 'Világos szürke',
		'FFF0F5': 'Lavender Blush',
		'FAEBD7': 'Törtfehér',
		'FFFFE0': 'Világos sárga',
		'F0FFF0': 'Menta',
		'F0FFFF': 'Azúr kék',
		'F0F8FF': 'Halvány kék',
		'E6E6FA': 'Lavender',
		'FFF': 'Fehér'
	},

	scayt: {
		title: 'Helyesírás ellenőrzés gépelés közben',
		opera_title: 'Az Opera nem támogatja',
		enable: 'SCAYT engedélyezése',
		disable: 'SCAYT letiltása',
		about: 'SCAYT névjegy',
		toggle: 'SCAYT kapcsolása',
		options: 'Beállítások',
		langs: 'Nyelvek',
		moreSuggestions: 'További javaslatok',
		ignore: 'Kihagy',
		ignoreAll: 'Összes kihagyása',
		addWord: 'Szó hozzáadása',
		emptyDic: 'A szótár nevét meg kell adni.',

		optionsTab: 'Beállítások',
		allCaps: 'Nagybetűs szavak kihagyása',
		ignoreDomainNames: 'Domain nevek kihagyása',
		mixedCase: 'Kis és nagybetűt is tartalmazó szavak kihagyása',
		mixedWithDigits: 'Számokat tartalmazó szavak kihagyása',

		languagesTab: 'Nyelvek',

		dictionariesTab: 'Szótár',
		dic_field_name: 'Szótár neve',
		dic_create: 'Létrehozás',
		dic_restore: 'Visszaállítás',
		dic_delete: 'Törlés',
		dic_rename: 'Átnevezés',
		dic_info: 'Kezdetben a felhasználói szótár böngésző sütiben tárolódik. Azonban a sütik maximális mérete korlátozott. Amikora a szótár akkora lesz, hogy már sütiben nem lehet tárolni, akkor a szótárat tárolhatja a szerveren is. Ehhez egy nevet kell megadni a szótárhoz. Amennyiben már van szerveren tárolt szótára, adja meg a nevét és kattintson a visszaállítás gombra.',

		aboutTab: 'Névjegy'
	},

	about: {
		title: 'CKEditor névjegy',
		dlgTitle: 'CKEditor névjegy',
		help: 'Check $1 for help.', // MISSING
		userGuide: 'CKEditor User\'s Guide', // MISSING
		moreInfo: 'Licenszelési információkért kérjük látogassa meg weboldalunkat:',
		copy: 'Copyright &copy; $1. Minden jog fenntartva.'
	},

	maximize: 'Teljes méret',
	minimize: 'Kis méret',

	fakeobjects: {
		anchor: 'Horgony',
		flash: 'Flash animáció',
		iframe: 'IFrame', // MISSING
		hiddenfield: 'Hidden Field', // MISSING
		unknown: 'Ismeretlen objektum'
	},

	resize: 'Húzza az átméretezéshez',

	colordialog: {
		title: 'Válasszon színt',
		options: 'Szín opciók',
		highlight: 'Nagyítás',
		selected: 'Kiválasztott',
		clear: 'Ürítés'
	},

	toolbarCollapse: 'Eszköztár összecsukása',
	toolbarExpand: 'Eszköztár szétnyitása',

	toolbarGroups: {
		document: 'Document', // MISSING
		clipboard: 'Clipboard/Undo', // MISSING
		editing: 'Editing', // MISSING
		forms: 'Forms', // MISSING
		basicstyles: 'Basic Styles', // MISSING
		paragraph: 'Paragraph', // MISSING
		links: 'Links', // MISSING
		insert: 'Insert', // MISSING
		styles: 'Styles', // MISSING
		colors: 'Colors', // MISSING
		tools: 'Tools' // MISSING
	},

	bidi: {
		ltr: 'Szöveg iránya balról jobbra',
		rtl: 'Szöveg iránya jobbról balra'
	},

	docprops: {
		label: 'Document Properties', // MISSING
		title: 'Document Properties', // MISSING
		design: 'Design', // MISSING
		meta: 'Meta Tags', // MISSING
		chooseColor: 'Choose', // MISSING
		other: 'Other...', // MISSING
		docTitle: 'Page Title', // MISSING
		charset: 'Character Set Encoding', // MISSING
		charsetOther: 'Other Character Set Encoding', // MISSING
		charsetASCII: 'ASCII', // MISSING
		charsetCE: 'Central European', // MISSING
		charsetCT: 'Chinese Traditional (Big5)', // MISSING
		charsetCR: 'Cyrillic', // MISSING
		charsetGR: 'Greek', // MISSING
		charsetJP: 'Japanese', // MISSING
		charsetKR: 'Korean', // MISSING
		charsetTR: 'Turkish', // MISSING
		charsetUN: 'Unicode (UTF-8)', // MISSING
		charsetWE: 'Western European', // MISSING
		docType: 'Document Type Heading', // MISSING
		docTypeOther: 'Other Document Type Heading', // MISSING
		xhtmlDec: 'Include XHTML Declarations', // MISSING
		bgColor: 'Background Color', // MISSING
		bgImage: 'Background Image URL', // MISSING
		bgFixed: 'Non-scrolling (Fixed) Background', // MISSING
		txtColor: 'Text Color', // MISSING
		margin: 'Page Margins', // MISSING
		marginTop: 'Top', // MISSING
		marginLeft: 'Left', // MISSING
		marginRight: 'Right', // MISSING
		marginBottom: 'Bottom', // MISSING
		metaKeywords: 'Document Indexing Keywords (comma separated)', // MISSING
		metaDescription: 'Document Description', // MISSING
		metaAuthor: 'Author', // MISSING
		metaCopyright: 'Copyright', // MISSING
		previewHtml: '<p>This is some <strong>sample text</strong>. You are using <a href="javascript:void(0)">CKEditor</a>.</p>' // MISSING
	}
};
