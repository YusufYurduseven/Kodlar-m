/**
 * BİLEN HUKUK & ARABULUCULUK - KAPSAMLI JAVASCRIPT DOSYASI
 * İçerik:
 * 1. Uygulama Veritabanı (Faaliyet Alanları, Yasal Metinler, Araçlar)
 * 2. SPA (Single Page Application) Sayfa Yönlendirme Motoru
 * 3. Canlı Arama ve Filtreleme Sistemi
 * 4. Çoklu Dil Yönetimi (Google Translate, RTL, Çerez Kontrolü)
 * 5. Detaylı Hesaplama Motorları (Dava Harcı, Değer Kaybı, Yıllık İzin)
 * 6. Basit Hesaplama Modal (Popup) Motorları
 * 7. Form ve Kullanıcı Etkileşimleri (Toast, Kopyalama, Akordeon)
 */

/* ==========================================================================
   1. UYGULAMA VERİ TABANI
   ========================================================================== */
const appDatabase = {
    // --- FAALİYET ALANLARI ---
    "arabuluculuk": {
        type: "info",
        title: "Uzman Arabuluculuk",
        desc: "Arabulucu Bilal YURDUSEVEN yönetiminde; işçi-işveren anlaşmazlıkları, ticari davalar ve tüketici uyuşmazlıklarında mahkeme sürecine girmeden, tarafsız, ekonomik ve hızlı çözüm imkanı sağlıyoruz.",
        list: [
            "İş Hukuku Dava Şartı Arabuluculuğu",
            "Ticari Uyuşmazlıklar Zorunlu Arabuluculuk",
            "Tüketici Uyuşmazlıkları Arabuluculuğu",
            "İhtiyari (İsteğe Bağlı) Arabuluculuk",
            "Kira Tespit ve Tahliye Uyuşmazlıkları",
            "Ortaklığın Giderilmesi (İzale-i Şuyu) Arabuluculuğu"
        ]
    },
    "yabancilar": {
        type: "info",
        title: "Yabancılar Hukuku",
        desc: "Av. Anas ELAHMED öncülüğünde; Türkiye'de yaşayan veya yaşamak isteyen yabancıların tüm hukuki süreçlerini A'dan Z'ye bizzat takip ediyoruz.",
        list: [
            "İstisnai (Yatırım Yoluyla) Türk Vatandaşlığı",
            "Kısa ve Uzun Dönem İkamet İzinleri (Oturma İzni)",
            "Yabancılar İçin Çalışma İzinlerinin Alınması",
            "Deport (Sınır Dışı) Kararlarının İdare Mahkemesinde İptali",
            "Tahdit Kodlarının (G-87, Ç-114 vb.) Kaldırılması Davaları",
            "Yabancıların Gayrimenkul Alım/Satım Süreçleri"
        ]
    },
    "ceza": {
        type: "info",
        title: "Ceza ve Ağır Ceza Hukuku",
        desc: "Soruşturma evresinden (kolluk ve savcılık ifadeleri) infaz aşamasına kadar şüpheli, sanık müdafiiliği ve müşteki vekilliği konularında kesintisiz hukuki koruma.",
        list: [
            "Ağır Ceza Mahkemesi Davaları",
            "Asliye Ceza Mahkemesi Davaları",
            "Gözaltı, İfade Süreci ve Tutukluluğa İtiraz",
            "Siber Suçlar ve Bilişim Suçları",
            "Mali, Ekonomik ve Şirket Suçları",
            "İstinaf, Temyiz ve İnfaz (Yatar) Hesaplamaları"
        ]
    },
    "is": {
        type: "info",
        title: "İş ve Sosyal Güvenlik Hukuku",
        desc: "İşçi-işveren uyuşmazlıkları, haksız fesihler, iş kazaları ve tüm yasal işçilik alacakları için titiz hesaplama ve dava takip süreçleri.",
        list: [
            "Kıdem ve İhbar Tazminatı Davaları",
            "İşe İade Davaları ve İşe Başlatmama Tazminatı",
            "Fazla Mesai, Hafta Tatili ve UBGT Alacakları",
            "İş Kazası Maddi ve Manevi Tazminat Davaları",
            "Hizmet Tespiti (Sigortasız Çalışma) Davaları",
            "İşçi ve İşveren Arasında Sözleşmelerin Hazırlanması"
        ]
    },
    "idare": {
        type: "info",
        title: "İdare Hukuku",
        desc: "Kamu idareleri tarafından tesis edilen hukuka aykırı işlemlerin idare mahkemelerinde iptali ve devletten kaynaklanan zararların tazmini (tam yargı).",
        list: [
            "İdari İşlemin İptali Davaları",
            "Tam Yargı (Tazminat) Davaları",
            "Memur Disiplin Cezaları ve Atama İptalleri",
            "Kamu İhale Kurumu (KİK) İtiraz Süreçleri",
            "Kamulaştırma ve Bedel Artırımı Davaları"
        ]
    },
    "aile": {
        type: "info",
        title: "Aile ve Boşanma Hukuku",
        desc: "Boşanma, velayet, nafaka, maddi-manevi tazminat ve evlilik birliğinde edinilen malların paylaşımı konularında mahremiyet esaslı avukatlık.",
        list: [
            "Anlaşmalı Boşanma Protokolü ve Davası",
            "Çekişmeli Boşanma ve Tazminat Davaları",
            "Velayet ve Nafaka (İştirak, Yoksulluk) Davaları",
            "Mal Rejimi Tasfiyesi ve Katılma Alacağı",
            "6284 Sayılı Kanun Kapsamında Uzaklaştırma Kararları",
            "Soybağının Reddi ve Babalık Davaları"
        ]
    },
    "gayrimenkul": {
        type: "info",
        title: "Gayrimenkul Hukuku",
        desc: "Taşınmaz malların alım-satımı, kiralama süreçleri, tapu uyuşmazlıkları ve ortaklığın giderilmesi hususlarında tam kapsamlı hukuki danışmanlık.",
        list: [
            "Kira Bedeli Tespit ve Uyarlama Davaları",
            "Tahliye Taahhüdü ve Tahliye Davaları",
            "Tapu İptal ve Tescil Davaları",
            "İzale-i Şuyu (Ortaklığın Giderilmesi) Davaları",
            "Kat Karşılığı İnşaat Sözleşmeleri",
            "Müdahalenin Men'i ve Ecrimisil Davaları"
        ]
    },
    "tazminat": {
        type: "info",
        title: "Tazminat Hukuku",
        desc: "Trafik kazaları, hatalı tıbbi müdahaleler (malpraktis) ve haksız fiilden doğan tüm maddi ve manevi zararların hesaplanması ve tahsili.",
        list: [
            "Ölümlü ve Yaralamalı Trafik Kazası Tazminatları",
            "Destekten Yoksun Kalma Tazminatı",
            "Tıbbi Malpraktis (Hekim Hatası) Davaları",
            "İş Gücü Kaybı ve Maluliyet Tazminatları",
            "Araç Değer Kaybı ve Hasar Bedeli Tahsili"
        ]
    },
    "icra": {
        type: "info",
        title: "İcra ve İflas Hukuku",
        desc: "Bireysel ve kurumsal alacakların yasal yollarla tahsili, çek-senet takibi, haciz işlemleri ve şirketlerin borç yapılandırma (konkordato) süreçleri.",
        list: [
            "İlamlı ve İlamsız İcra Takipleri",
            "Kambiyo Senedine (Çek/Senet) Dayalı Takipler",
            "İhtiyati Haciz Kararı Alınması ve Uygulanması",
            "İtirazın İptali, Kaldırılması ve Menfi Tespit Davaları",
            "Taşınır ve Taşınmaz Haczi, Satış İşlemleri",
            "İflas Erteleme ve Konkordato Projeleri"
        ]
    },
    "miras": {
        type: "info",
        title: "Miras Hukuku",
        desc: "Miras bırakanın vefatı sonrası mirasçıların haklarının tespiti, vasiyetname düzenlenmesi ve mirastan mal kaçırma davaları.",
        list: [
            "Veraset İlamı (Mirasçılık Belgesi) Alınması",
            "Muris Muvazaası (Mirastan Mal Kaçırma) Davaları",
            "Tenkis (Saklı Payın Korunması) Davaları",
            "Vasiyetname Hazırlanması ve İptali",
            "Mirastan Feragat ve Mirasın Reddi Davaları"
        ]
    },
    "tuketici": {
        type: "info",
        title: "Tüketici Hukuku",
        desc: "Tüketicilerin satın aldıkları mal veya hizmetlerden doğan mağduriyetlerinin Tüketici Hakem Heyetleri ve Tüketici Mahkemelerinde giderilmesi.",
        list: [
            "Ayıplı Mal ve Hizmetten Doğan Davalar",
            "Tüketici Hakem Heyeti Başvuruları ve İtirazları",
            "Mesafeli Satış Sözleşmesi (E-Ticaret) İhlalleri",
            "Konut ve Devre Tatil Sözleşmeleri İptali"
        ]
    },
    "sirketler": {
        type: "info",
        title: "Şirketler Hukuku",
        desc: "Anonim ve Limited şirketlerin kuruluşu, kurumsal yönetimi, genel kurul işlemleri ve ortaklar arası ticari uyuşmazlıkların idaresi.",
        list: [
            "Şirket Ana Sözleşmelerinin Hazırlanması",
            "Genel Kurul ve Yönetim Kurulu Kararlarının İptali",
            "Şirket Birleşme, Bölünme ve Nevi Değişikliği",
            "Haksız Rekabet Uyuşmazlıkları",
            "Ticari Alacak Davaları ve Cari Hesap Mutabakatları"
        ]
    },
    "bilisim": {
        type: "info",
        title: "Bilişim ve KVKK Hukuku",
        desc: "İnternet ortamında işlenen suçlar, içerik kaldırma ve şirketlerin Kişisel Verilerin Korunması Kanunu'na uyum (VERBİS) süreçleri.",
        list: [
            "KVKK Uyum Danışmanlığı ve VERBİS Kayıtları",
            "Erişimin Engellenmesi ve İçerik Kaldırma",
            "Unutulma Hakkı Başvuruları",
            "Kripto Varlık ve Bilişim Suçları Şikayetleri",
            "E-Ticaret Hukuku ve Kullanıcı Sözleşmeleri"
        ]
    },
    "vergi": {
        type: "info",
        title: "Vergi Hukuku",
        desc: "Maliye Bakanlığı ve vergi dairelerince kesilen usulsüzlük, vergi ziyaı cezalarının iptali ve uzlaşma komisyonlarında mükellef temsili.",
        list: [
            "Vergi Ceza İhbarnamelerinin İptali",
            "Tarhiyat Öncesi ve Sonrası Uzlaşma Görüşmeleri",
            "Ödeme Emrinin İptali Davaları",
            "Sahte Belge (Naylon Fatura) Düzenleme Suçları"
        ]
    },
    "saglik": {
        type: "info",
        title: "Sağlık Hukuku",
        desc: "Hasta ve hekim hakları çerçevesinde tıbbi uygulama hataları (malpraktis) ve hastane yönetiminin kusurundan doğan zararların tazmini.",
        list: [
            "Tıbbi Malpraktis Maddi ve Manevi Tazminat Davaları",
            "Hekimlerin Mesleki Sorumluluk Sigortası Uyuşmazlıkları",
            "Aydınlatılmış Onam (Rıza) İhlalleri",
            "Özel Hastanelerin Hukuki Sorumluluğu"
        ]
    },
    "sigorta": {
        type: "info",
        title: "Sigorta Hukuku",
        desc: "Sigorta poliçelerinden doğan uyuşmazlıkların Sigorta Tahkim Komisyonu (STK) veya mahkemeler nezdinde çözüme kavuşturulması.",
        list: [
            "Sigorta Tahkim Komisyonu Başvuruları",
            "Araç Hasar, Değer Kaybı ve İkame Araç Bedeli",
            "Hayat ve Ferdi Kaza Sigortası Poliçe İhtilafları",
            "Sigorta Şirketlerinin Rücu Davalarına İtiraz"
        ]
    },

    // --- HESAPLAMA MOTORLARI VERİSİ ---
    "harc": { type: "dedicated", title: "Dava Harcı ve Yargılama Gideri Hesaplama" },
    "arac": { type: "dedicated", title: "Araç Değer Kaybı Hesaplama" },
    "yillik": { type: "dedicated", title: "Yıllık İzin Ücreti Hesaplama" },
    "mesai": { type: "calc", title: "Fazla Mesai Ücreti Hesaplama", func: "calcMesai()" },
    "ihbar": { type: "calc", title: "İhbar Tazminatı Hesaplama", func: "calcIhbar()" },
    "infaz": { type: "calc", title: "İnfaz (Yatar) Hesaplama", func: "calcInfaz()" },
    "kidem": { type: "calc", title: "Kıdem Tazminatı Hesaplama", func: "calcKidem()" },
    "haftalik": { type: "calc", title: "Haftalık İzin Ücreti Hesaplama", func: "calcHaftalik()" },
    "bayram": { type: "calc", title: "UBGT (Bayram) Ücreti Hesaplama", func: "calcBayram()" },
    "isgucu": { type: "calc", title: "İş Gücü Kaybı Tazminatı", func: "calcIsgucu()" },
    "issizlik": { type: "calc", title: "İşsizlik Maaşı Hesaplama", func: "calcIssizlik()" },
    "arabulucu": { type: "calc", title: "Arabuluculuk Asgari Ücret Hesaplama", func: "calcArabulucu()" },
    "faiz": { type: "calc", title: "Yasal & Ticari Faiz Hesaplama", func: "calcFaiz()" },
    "smm": { type: "calc", title: "Serbest Meslek Makbuzu (SMM)", func: "calcSMM()" },

    // --- YASAL METİNLER (FOOTER LİNKLERİ) ---
    "kvkk": {
        type: "policy",
        title: "KVKK Aydınlatma Metni",
        content: `
            <p>Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, www.bilenhukuk.com internet sitesi üzerinden toplanan kişisel verilerin işlenmesine ilişkin olarak veri sorumlusu sıfatıyla Bilen Hukuk & Arabuluculuk tarafından hazırlanmıştır.</p>
            <h4 style="margin-top: 1.5rem; margin-bottom:0.5rem; color: var(--primary-color);">1. Veri Sorumlusu</h4>
            <p>Kişisel verileriniz, KVKK kapsamında veri sorumlusu olarak: <strong>Bilen Hukuk & Arabuluculuk</strong><br>
            Adres: Fatih / İstanbul<br>
            E-posta: b_ysvn@hotmail.com<br>
            Telefon: +90 552 409 38 44 / +90 537 296 87 20 tarafından işlenmektedir.</p>
            <h4 style="margin-top: 1.5rem; margin-bottom:0.5rem; color: var(--primary-color);">2. İşlenen Kişisel Veriler</h4>
            <ul style="margin-left: 20px; margin-bottom: 10px; list-style-type:disc;">
                <li>Ad, soyad, telefon numarası ve e-posta adresi</li>
                <li>Danışma talebi kapsamında paylaşılan hukuki bilgiler</li>
                <li>IP adresi ve teknik log kayıtları</li>
            </ul>
            <p>Hukuki danışmanlık kapsamında paylaşılan bilgiler, Avukatlık Kanunu gereği meslek sırrı kapsamında özel korumaya tabidir.</p>
            <h4 style="margin-top: 1.5rem; margin-bottom:0.5rem; color: var(--primary-color);">3. Başvuru Yöntemi</h4>
            <p>Haklarınıza ilişkin taleplerinizi b_ysvn@hotmail.com adresine iletebilirsiniz.</p>
        `
    },
    "cerez": {
        type: "policy",
        title: "Çerez Politikası",
        content: `
            <p>Bilen Hukuk & Arabuluculuk web sitesi (www.bilenhukuk.com), ziyaretçilerine daha iyi bir kullanıcı deneyimi sunmak amacıyla zorunlu ve analitik çerezler (cookies) kullanmaktadır.</p>
            <p>Kullanıcılar tarayıcı ayarlarından çerezleri diledikleri zaman silebilir veya engelleyebilirler.</p>
        `
    },
    "kullanim": {
        type: "policy",
        title: "Kullanım Koşulları",
        content: `
            <p>www.bilenhukuk.com sitesinde yer alan tüm hesaplama araçları, hukuki makaleler ve içerikler genel bilgilendirme amacıyla hazırlanmıştır. Doğrudan hukuki tavsiye niteliği taşımamakta olup avukat-müvekkil ilişkisi kurmaz.</p>
            <p>Sitemiz, Türkiye Barolar Birliği'nin Reklam Yasağı Yönetmeliği'ne tam uyumludur.</p>
        `
    },
    "gizlilik": {
        type: "policy",
        title: "Gizlilik Bildirimi",
        content: `
            <p>Bilen Hukuk & Arabuluculuk olarak; iletişim kanallarımız üzerinden büromuza ilettiğiniz tüm kişisel veriler ve hukuki sırlar Avukatlık Kanunu'nun 36. maddesi uyarınca süresiz olarak sır saklama yükümlülüğü altındadır.</p>
        `
    }
};


/* ==========================================================================
   2. YARDIMCI SEÇİM ÜRETİCİLERİ & FORMATLAYICILAR
   ========================================================================== */
function getDayOptionsHtml() {
    let html = '';
    for (let i = 1; i <= 31; i++) {
        html += `<option value="${i}">${i}</option>`;
    }
    return html;
}

function getMonthOptionsHtml() {
    const aylar = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
    return aylar.map((ay, idx) => `<option value="${idx + 1}">${ay}</option>`).join('');
}

function getYearOptionsHtml(startYear = 2026, endYear = 1926) {
    let html = '';
    for (let y = startYear; y >= endYear; y--) {
        html += `<option value="${y}">${y}</option>`;
    }
    return html;
}

function formatCurrencyTRY(num) {
    if (isNaN(num) || num === null || num === undefined) num = 0;
    return '₺' + num.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}


/* ==========================================================================
   3. SPA SAYFA / BÖLÜM YÖNLENDİRME MOTORU
   ========================================================================== */
window.navigateToHome = function() {
    const toolView = document.getElementById('tool-detail-view');
    const homeView = document.getElementById('home-view');
    if (toolView) toolView.style.display = 'none';
    if (homeView) homeView.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.navigateToSection = function(sectionId) {
    const toolView = document.getElementById('tool-detail-view');
    const homeView = document.getElementById('home-view');
    if (toolView) toolView.style.display = 'none';
    if (homeView) homeView.style.display = 'block';

    setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
};

window.openToolPage = function(toolId) {
    const homeView = document.getElementById('home-view');
    const toolView = document.getElementById('tool-detail-view');
    const container = document.getElementById('toolArticleContainer');
    const breadcrumb = document.getElementById('toolBreadcrumbCurrent');

    if (homeView) homeView.style.display = 'none';
    if (toolView) toolView.style.display = 'block';

    if (toolId === 'harc') {
        if (breadcrumb) breadcrumb.innerText = 'Dava Harcı & Gider Avansı Hesaplama';
        if (container) container.innerHTML = getCourtFeeArticleHtml();
        runLiveCourtFeeDetailedCalc();
    } else if (toolId === 'arac') {
        if (breadcrumb) breadcrumb.innerText = 'Araç Değer Kaybı Hesaplama';
        if (container) container.innerHTML = getVehicleLossArticleHtml();
        runLiveVehicleDetailedCalc();
    } else if (toolId === 'yillik') {
        if (breadcrumb) breadcrumb.innerText = 'Yıllık İzin Ücreti Hesaplama';
        if (container) container.innerHTML = getLeaveArticleHtml();
        runLiveLeaveCalc();
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
};


/* ==========================================================================
   4. CANLI FAALİYET ALANI ARAMA & FİLTRELEME
   ========================================================================== */
window.filterAreasList = function() {
    const input = document.getElementById('areaSearchInput');
    if (!input) return;
    const val = input.value.toLowerCase().trim();
    const cards = document.querySelectorAll('#areasContainer .action-card');
    
    cards.forEach(card => {
        const titleEl = card.querySelector('h3');
        const title = titleEl ? titleEl.innerText.toLowerCase() : '';
        const kw = card.getAttribute('data-keywords') || '';
        
        if (title.includes(val) || kw.includes(val)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
};


/* ==========================================================================
   5. DEDİKE SAYFALAR (HTML ŞABLONLARI VE CANLI MATEMATİKLERİ)
   ========================================================================== */

/* --- 5.1 DAVA HARCI & GİDER AVANSI SAYFASI --- */
function getCourtFeeArticleHtml() {
    return `
        <div class="dedicated-calc-container">
            <h1 class="dedicated-calc-title">Dava Harcı ve Yargılama Gideri Hesaplama (2026)</h1>
            <div class="dedicated-calc-meta">
                <span><i class="fa-solid fa-scale-unbalanced"></i> Bilen Hukuk Yargılama Masrafları Ekibi</span>
                <span><i class="fa-regular fa-calendar"></i> 2026 Güncel Tarife</span>
                <span><i class="fa-solid fa-calculator"></i> Harç ve Avans Robotu</span>
            </div>
            <p>Dava harcını hesaplamak için mahkeme türünü, dava değerini, davacı ve davalı sayılarını ve diğer detayları giriniz.</p>

            <div class="live-calc-box">
                <div class="live-calc-grid-form">
                    
                    <div class="calc-input-group">
                        <label>Mahkeme / Takip Türü:</label>
                        <select id="feeCourtType" class="calc-input-field" onchange="runLiveCourtFeeDetailedCalc()">
                            <option value="asliye">Asliye Mahkemeleri (Hukuk, Ticaret, İş, Aile)</option>
                            <option value="sulh">Sulh Hukuk Mahkemeleri</option>
                            <option value="icra_hukuk">İcra Mahkemeleri (İcra Hukuk / Ceza)</option>
                            <option value="icra_takip">İcra Takipleri (Takip Açılış / İlamsız)</option>
                            <option value="tuketici">Tüketici Mahkemeleri (Tüketici Davacı - Harçtan Muaf)</option>
                            <option value="fikri">Fikri ve Sınai Haklar Mahkemesi</option>
                            <option value="idare_durusmali">İdare Mahkemesi (Duruşmalı)</option>
                            <option value="idare_durusmasiz">İdare Mahkemesi (Duruşmasız)</option>
                        </select>
                    </div>

                    <div class="calc-input-group">
                        <label>Dava / Takip Değeri (TL):</label>
                        <input type="number" id="feeClaimValue" class="calc-input-field" placeholder="Örn: 250000" oninput="runLiveCourtFeeDetailedCalc()">
                    </div>

                    <div class="calc-input-group">
                        <label>Davacı / Davalı Toplam Taraf Sayısı:</label>
                        <input type="number" id="feePartyCount" class="calc-input-field" placeholder="Örn: 2" value="2" min="2" oninput="runLiveCourtFeeDetailedCalc()">
                    </div>

                    <div class="calc-input-group">
                        <label>Tanık Sayısı:</label>
                        <input type="number" id="feeWitnessCount" class="calc-input-field" placeholder="Örn: 2" value="0" min="0" oninput="runLiveCourtFeeDetailedCalc()">
                    </div>

                    <div class="calc-input-group">
                        <label>Bilirkişi Sayısı:</label>
                        <input type="number" id="feeExpertCount" class="calc-input-field" placeholder="Örn: 1" value="0" min="0" oninput="runLiveCourtFeeDetailedCalc()">
                    </div>

                    <div class="calc-input-group">
                        <label>Keşif Yapılacak mı?:</label>
                        <select id="feeDiscovery" class="calc-input-field" onchange="runLiveCourtFeeDetailedCalc()">
                            <option value="0">Keşif Yok</option>
                            <option value="1">Keşif Var (+4.200 TL Avans)</option>
                        </select>
                    </div>

                    <div class="checkbox-group-wrapper">
                        <label class="checkbox-item">
                            <input type="checkbox" id="feeVekaletSuret" checked onchange="runLiveCourtFeeDetailedCalc()">
                            <span>Vekalet Suret Harcı (₺104,00)</span>
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" id="feeBaroPulu" checked onchange="runLiveCourtFeeDetailedCalc()">
                            <span>Baro Pulu (₺164,00)</span>
                        </label>
                    </div>

                </div>

                <table class="live-res-table">
                    <tr>
                        <td>Başvurma Harcı (2026):</td>
                        <td id="resBasvuruHarc" style="font-weight:600; text-align:right;">₺0,00</td>
                    </tr>
                    <tr>
                        <td>Peşin Karar ve İlam Harcı (1/4 Nispi):</td>
                        <td id="resPesinHarc" style="color:var(--primary-color); font-weight:600; text-align:right;">₺0,00</td>
                    </tr>
                    <tr>
                        <td>Gider Avansı (Tebligat, Posta, Delil):</td>
                        <td id="resGiderAvansi" style="text-align:right;">₺0,00</td>
                    </tr>
                    <tr>
                        <td>Delil Avansı (Bilirkişi / Tanık / Keşif):</td>
                        <td id="resDelilAvansi" style="text-align:right;">₺0,00</td>
                    </tr>
                    <tr>
                        <td>Vekalet Harçları (Suret + Baro Pulu):</td>
                        <td id="resVekaletHarci" style="text-align:right;">₺0,00</td>
                    </tr>
                    <tr>
                        <td>Dava Açılışında Ödenecek Toplam Tutar:</td>
                        <td id="resTotalCourtFee" style="text-align:right;">₺0,00</td>
                    </tr>
                </table>
            </div>
        </div>

        <article class="article-body-content">
            <h2>Dava Harcı ve Yargılama Gideri Nedir?</h2>
            <p>Türk hukukunda dava türleri genel mahiyette üçe ayrılmaktadır: hukuk davaları, ceza davaları ve idari davalar. Her dava türü kendi içinde farklılıklar arz etmektedir. Bununla birlikte çoğu kişinin aklına <strong>dava harcı ve yargılama gideri ne kadar?</strong> sorusu gelmektedir.</p>
            <p><strong>Bilen Hukuk & Arabuluculuk</strong> olarak hazırladığımız güncel oranları esas alan yargılama gideri hesaplama robotunu kullanarak harç ücretlerini kolaylıkla hesaplayabilir, bu konuda bize her türlü iletişim yolu ile danışabilirsiniz.</p>

            <h2>Dava Harcı Nedir?</h2>
            <p>492 Sayılı Harçlar Kanunu uyarınca, mahkemelerin yürüttüğü yargı hizmeti karşılığında devlete ödenen ücrete <strong>harç</strong> denilmektedir. Ülkemizde bilabedel bir yargılama söz konusu değildir. Uyuşmazlıkların çözümü için yürütülen yargısal işlemlerde taraflarca devlete ödenmesi gereken çeşitli harçlar ortaya çıkmaktadır.</p>

            <h2>Dava Harcı Neye Göre Belirlenir?</h2>
            <p>Nispi harca tabi davalarda harç, dava değeri üzerinden hesaplanır. Nispi karar ve ilam harcı oranı <strong>binde 68,31</strong>'dir. Dava açılırken bu tutarın dörtte biri (1/4) <strong>peşin harç</strong> olarak alınır.</p>

            <div class="callout-box">
                <strong>Örnek Hesaplama:</strong> 1.000.000 TL değerindeki bir alacak davasında toplam nispi harç 68.310 TL'dir. Dava açılırken bu tutarın dörtte biri, yani <strong>17.077,50 TL</strong> peşin harç olarak vezneye yatırılır.
            </div>

            <h2>2026 Yılı Mahkeme ve Takip Türüne Göre Başvurma Harçları</h2>
            <table class="legal-table">
                <thead>
                    <tr>
                        <th>Mahkeme / Takip Türü</th>
                        <th>2026 Başvurma Harcı</th>
                        <th>Ek Gider ve Esaslar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sulh Hukuk ve İcra Mahkemeleri</td>
                        <td>335,20 TL</td>
                        <td>Gider avansı ve maktu/nispi harç eklenir.</td>
                    </tr>
                    <tr>
                        <td>Asliye Mahkemeleri & Fikri Sınai Haklar</td>
                        <td>732,00 TL</td>
                        <td>Binde 68,31 / 4 peşin nispi harç + tebligat avansı.</td>
                    </tr>
                    <tr>
                        <td>İdare Mahkemesi (Duruşmasız)</td>
                        <td>732,00 TL</td>
                        <td>Ortalama 2.100 TL posta ve tebligat gideri.</td>
                    </tr>
                    <tr>
                        <td>İdare Mahkemesi (Duruşmalı)</td>
                        <td>732,00 TL</td>
                        <td>Ortalama 2.520 TL duruşma ve posta gideri.</td>
                    </tr>
                    <tr>
                        <td>İcra Takipleri (Takip Açılış)</td>
                        <td>732,00 TL</td>
                        <td>İlamsız takiplerde ayrıca alacağın binde 5'i peşin harç alınır.</td>
                    </tr>
                    <tr>
                        <td>Tüketici Mahkemeleri (Tüketici Tarafından)</td>
                        <td>0,00 TL (Muaf)</td>
                        <td>6502 sayılı Kanun m. 73/2 uyarınca tüketici harçtan muaftır.</td>
                    </tr>
                </tbody>
            </table>

            <h2>Yargılama Gideri Nedir? (HMK m. 323)</h2>
            <ul>
                <li>Başvurma, karar ve ilam harçları</li>
                <li>Tebliğ ve posta giderleri</li>
                <li>Keşif giderleri ve araç ücretleri</li>
                <li>Tanık ve bilirkişiye ödenen ücret ve giderler</li>
                <li>Resmî kurumlardan celp edilen belgelerin harç ve masrafları</li>
                <li>Vekille takip edilen davalarda kanun gereğince takdir olunacak ilam vekalet ücreti</li>
            </ul>
        </article>
    `;
}

window.runLiveCourtFeeDetailedCalc = function() {
    const courtTypeEl = document.getElementById('feeCourtType');
    const claimValEl = document.getElementById('feeClaimValue');
    const partyCountEl = document.getElementById('feePartyCount');
    const witnessCountEl = document.getElementById('feeWitnessCount');
    const expertCountEl = document.getElementById('feeExpertCount');
    const discoveryEl = document.getElementById('feeDiscovery');
    const isVekaletSuretEl = document.getElementById('feeVekaletSuret');
    const isBaroPuluEl = document.getElementById('feeBaroPulu');

    if (!courtTypeEl) return;

    const courtType = courtTypeEl.value;
    const claimVal = parseFloat(claimValEl?.value) || 0;
    const partyCount = parseInt(partyCountEl?.value) || 2;
    const witnessCount = parseInt(witnessCountEl?.value) || 0;
    const expertCount = parseInt(expertCountEl?.value) || 0;
    const discovery = parseInt(discoveryEl?.value) || 0;
    const isVekaletSuret = isVekaletSuretEl ? isVekaletSuretEl.checked : true;
    const isBaroPulu = isBaroPuluEl ? isBaroPuluEl.checked : true;

    let basvuruHarc = 0;
    let pesinHarc = 0;
    let giderAvansi = 0;
    let delilAvansi = 0;
    let vekaletHarclari = 0;

    switch(courtType) {
        case 'asliye':
        case 'fikri':
            basvuruHarc = 732.00;
            pesinHarc = (claimVal * 0.06831) / 4;
            giderAvansi = (partyCount * 260) + 400;
            break;
        case 'sulh':
        case 'icra_hukuk':
            basvuruHarc = 335.20;
            pesinHarc = (claimVal * 0.06831) / 4;
            giderAvansi = (partyCount * 260) + 350;
            break;
        case 'icra_takip':
            basvuruHarc = 732.00;
            pesinHarc = claimVal * 0.005;
            giderAvansi = (partyCount * 260) + 200;
            break;
        case 'tuketici':
            basvuruHarc = 0.00;
            pesinHarc = 0.00;
            giderAvansi = (partyCount * 260) + 300;
            break;
        case 'idare_durusmali':
            basvuruHarc = 732.00;
            pesinHarc = (claimVal > 0) ? ((claimVal * 0.06831) / 4) : 0;
            giderAvansi = 2520.00;
            break;
        case 'idare_durusmasiz':
            basvuruHarc = 732.00;
            pesinHarc = (claimVal > 0) ? ((claimVal * 0.06831) / 4) : 0;
            giderAvansi = 2100.00;
            break;
    }

    const bilirkisiUcreti = expertCount * 3850.00;
    const tanikUcreti = witnessCount * 320.00;
    const kesifUcreti = (discovery === 1) ? 4200.00 : 0.00;
    delilAvansi = bilirkisiUcreti + tanikUcreti + kesifUcreti;

    if (isVekaletSuret) vekaletHarclari += 104.00;
    if (isBaroPulu) vekaletHarclari += 164.00;

    const toplamMasraf = basvuruHarc + pesinHarc + giderAvansi + delilAvansi + vekaletHarclari;

    const bHarcEl = document.getElementById('resBasvuruHarc');
    const pHarcEl = document.getElementById('resPesinHarc');
    const gAvansEl = document.getElementById('resGiderAvansi');
    const dAvansEl = document.getElementById('resDelilAvansi');
    const vHarcEl = document.getElementById('resVekaletHarci');
    const tMasrafEl = document.getElementById('resTotalCourtFee');

    if (bHarcEl) bHarcEl.innerText = formatCurrencyTRY(basvuruHarc);
    if (pHarcEl) pHarcEl.innerText = formatCurrencyTRY(pesinHarc);
    if (gAvansEl) gAvansEl.innerText = formatCurrencyTRY(giderAvansi);
    if (dAvansEl) dAvansEl.innerText = formatCurrencyTRY(delilAvansi);
    if (vHarcEl) vHarcEl.innerText = formatCurrencyTRY(vekaletHarclari);
    if (tMasrafEl) tMasrafEl.innerText = formatCurrencyTRY(toplamMasraf);
};


/* --- 5.2 ARAÇ DEĞER KAYBI SAYFASI --- */
function getVehicleLossArticleHtml() {
    const daysHtml = getDayOptionsHtml();
    const monthsHtml = getMonthOptionsHtml();
    const yearsHtml = getYearOptionsHtml(2026, 1926);

    return `
        <div class="dedicated-calc-container">
            <h1 class="dedicated-calc-title">Araç Değer Kaybı Hesaplama (2026)</h1>
            <div class="dedicated-calc-meta">
                <span><i class="fa-solid fa-car-burst"></i> Bilen Hukuk & Sigorta Tahkim Ekibi</span>
                <span><i class="fa-regular fa-calendar"></i> Güncel 2026</span>
                <span><i class="fa-solid fa-calculator"></i> Sigorta ve Tazminat Araçları</span>
            </div>
            <p>Araç değer kaybını hesaplamak için aracın piyasa değeri ve hasar bedelinin yanı sıra aracınızın diğer özelliklerini giriniz.</p>

            <div class="live-calc-box">
                <div class="live-calc-grid-form">
                    <div class="calc-input-group">
                        <label>Araç Piyasa Değeri (TL):</label>
                        <input type="number" id="vRayic" class="calc-input-field" placeholder="Örn: 900000" oninput="runLiveVehicleDetailedCalc()">
                    </div>
                    <div class="calc-input-group">
                        <label>Hasar Bedeli (Tramer / Onarım) (TL):</label>
                        <input type="number" id="vHasar" class="calc-input-field" placeholder="Örn: 75000" oninput="runLiveVehicleDetailedCalc()">
                    </div>
                    <div class="calc-input-group">
                        <label>Model Yılı:</label>
                        <select id="vModelYili" class="calc-input-field" onchange="runLiveVehicleDetailedCalc()">${yearsHtml}</select>
                    </div>
                    <div class="calc-input-group">
                        <label>Kilometre (km):</label>
                        <input type="number" id="vKm" class="calc-input-field" placeholder="Örn: 65000" oninput="runLiveVehicleDetailedCalc()">
                    </div>
                    <div class="calc-input-group">
                        <label>Kaza Tarihi:</label>
                        <div class="date-select-group">
                            <select id="vKazaGun" class="calc-input-field" onchange="runLiveVehicleDetailedCalc()">${daysHtml}</select>
                            <select id="vKazaAy" class="calc-input-field" onchange="runLiveVehicleDetailedCalc()">${monthsHtml}</select>
                            <select id="vKazaYil" class="calc-input-field" onchange="runLiveVehicleDetailedCalc()">${yearsHtml}</select>
                        </div>
                    </div>
                    <div class="calc-input-group">
                        <label>Hesap Tarihi:</label>
                        <div class="date-select-group">
                            <select id="vHesapGun" class="calc-input-field" onchange="runLiveVehicleDetailedCalc()">${daysHtml}</select>
                            <select id="vHesapAy" class="calc-input-field" onchange="runLiveVehicleDetailedCalc()">${monthsHtml}</select>
                            <select id="vHesapYil" class="calc-input-field" onchange="runLiveVehicleDetailedCalc()">${yearsHtml}</select>
                        </div>
                    </div>
                    <div class="calc-input-group">
                        <label>Davalı (Karşı Taraf) Kusur Oranı (%):</label>
                        <select id="vKusur" class="calc-input-field" onchange="runLiveVehicleDetailedCalc()">
                            <option value="100">Karşı Taraf %100 Kusurlu</option>
                            <option value="75">Karşı Taraf %75 Kusurlu</option>
                            <option value="50">Karşı Taraf %50 Kusurlu</option>
                            <option value="25">Karşı Taraf %25 Kusurlu</option>
                        </select>
                    </div>
                    <div class="calc-input-group">
                        <label>Değişen Parça Sayısı:</label>
                        <input type="number" id="vDegisen" class="calc-input-field" value="1" oninput="runLiveVehicleDetailedCalc()">
                    </div>
                    <div class="calc-input-group">
                        <label>Boyalı Parça Sayısı:</label>
                        <input type="number" id="vBoyali" class="calc-input-field" value="1" oninput="runLiveVehicleDetailedCalc()">
                    </div>
                    <div class="checkbox-group-wrapper">
                        <label class="checkbox-item"><input type="checkbox" id="vSasi" onchange="runLiveVehicleDetailedCalc()"><span>Şasi Hasarı Var (+%20)</span></label>
                        <label class="checkbox-item"><input type="checkbox" id="vAirbag" onchange="runLiveVehicleDetailedCalc()"><span>Airbag Açıldı (+%10)</span></label>
                    </div>
                </div>

                <table class="live-res-table">
                    <tr><td>Toplam Tespit Edilen Değer Kaybı:</td><td id="resVTotal" style="font-weight:600; text-align:right;">₺0,00</td></tr>
                    <tr><td>Karşı Taraf Kusur Payına Düşen Tutar:</td><td id="resVKusurPayi" style="color:var(--primary-color); font-weight:600; text-align:right;">₺0,00</td></tr>
                    <tr><td>Geçen Süre İçin Yasal / Avans Faizi:</td><td id="resVFaiz" style="color:#047857; text-align:right;">+₺0,00</td></tr>
                    <tr><td>Sigorta / Karşı Taraftan Toplam Talep Tutarı:</td><td id="resVNet" style="text-align:right;">₺0,00</td></tr>
                </table>
            </div>
        </div>

        <article class="article-body-content">
            <h2>Araç Değer Kaybı Nedir?</h2>
            <p>Araç değer kaybı, hasar gören bir aracın serbest piyasadaki ikinci el rayicinde hasar nedeniyle meydana gelen değer düşüklüğüdür.</p>
            <h2>Örnek Başvuru Dilekçeleri</h2>
            <div class="petition-container">
                <div class="petition-header">
                    <h4>1. Sigorta Şirketine Değer Kaybı Başvuru Dilekçesi</h4>
                    <button class="btn-copy-petition" onclick="copyPetitionText('pet1')"><i class="fa-regular fa-copy"></i> Metni Kopyala</button>
                </div>
                <div class="petition-body" id="pet1">…………………… SİGORTA A.Ş. GENEL MÜDÜRLÜĞÜ’NE

TALEP EDEN: Adı Soyadı (T.C.: ………………)
Adres: 
Telefon: 

KONU: Değer kaybı tazminatı talebimizden ibarettir.

AÇIKLAMALAR:
1- ……/……/202… tarihinde şirketinizce sigortalı ………… plakalı araç ile müvekkile ait ………… plakalı araç çarpışmış ve maddi hasarlı kaza meydana gelmiştir.
2- Kazanın oluşumunda karşı araç sürücüsü %100 kusurludur.
3- Kaza sebebiyle araçta oluşan değer kaybının avans faizi ile tarafıma ödenmesini talep ederim.

Talep Eden: Adı Soyadı</div>
            </div>
        </article>
    `;
}

window.runLiveVehicleDetailedCalc = function() {
    const rayicEl = document.getElementById('vRayic');
    const hasarEl = document.getElementById('vHasar');
    const modelYiliEl = document.getElementById('vModelYili');
    const kmEl = document.getElementById('vKm');
    const kusurEl = document.getElementById('vKusur');
    const degisenEl = document.getElementById('vDegisen');
    const boyaliEl = document.getElementById('vBoyali');
    const sasiEl = document.getElementById('vSasi');
    const airbagEl = document.getElementById('vAirbag');

    if (!rayicEl || !hasarEl) return;

    const rayic = parseFloat(rayicEl.value) || 0;
    const hasar = parseFloat(hasarEl.value) || 0;
    const modelYili = parseInt(modelYiliEl?.value) || 2026;
    const km = parseFloat(kmEl?.value) || 0;
    const kusur = parseFloat(kusurEl?.value) || 100;
    const degisen = parseInt(degisenEl?.value) || 0;
    const boyali = parseInt(boyaliEl?.value) || 0;
    const sasi = sasiEl ? sasiEl.checked : false;
    const airbag = airbagEl ? airbagEl.checked : false;

    const kazaYil = parseInt(document.getElementById('vKazaYil')?.value) || 2026;
    const kazaAy = parseInt(document.getElementById('vKazaAy')?.value) || 1;
    const hesapYil = parseInt(document.getElementById('vHesapYil')?.value) || 2026;
    const hesapAy = parseInt(document.getElementById('vHesapAy')?.value) || 1;

    let ayFarki = (hesapYil - kazaYil) * 12 + (hesapAy - kazaAy);
    if (ayFarki < 0) ayFarki = 0;

    const resTot = document.getElementById('resVTotal');
    const resKus = document.getElementById('resVKusurPayi');
    const resFai = document.getElementById('resVFaiz');
    const resNet = document.getElementById('resVNet');

    if (rayic <= 0 || hasar <= 0) {
        if (resTot) resTot.innerText = '₺0,00';
        if (resKus) resKus.innerText = '₺0,00';
        if (resFai) resFai.innerText = '+₺0,00';
        if (resNet) resNet.innerText = '₺0,00';
        return;
    }

    const aracYasi = Math.max(0, 2026 - modelYili);
    let yasKatsayisi = (aracYasi <= 2) ? 1.15 : (aracYasi <= 5 ? 1.0 : (aracYasi <= 10 ? 0.85 : 0.70));
    let kmKatsayisi = (km < 30000) ? 1.15 : (km < 75000 ? 1.05 : (km < 150000 ? 0.90 : 0.75));

    const parcaEtkisi = (degisen * 0.02) + (boyali * 0.01);
    let ekDurumCarpani = 1.0 + (sasi ? 0.20 : 0) + (airbag ? 0.10 : 0);

    const tabanKayip = ((rayic * 0.04) + (hasar * 0.14) + (rayic * parcaEtkisi)) * yasKatsayisi * kmKatsayisi * ekDurumCarpani;
    const toplamDegerKaybi = Math.min(tabanKayip, rayic * 0.35);
    const kusurPayi = (toplamDegerKaybi * kusur) / 100;
    const birikenFaiz = kusurPayi * (0.24 / 12) * ayFarki;
    const toplamTalep = kusurPayi + birikenFaiz;

    if (resTot) resTot.innerText = formatCurrencyTRY(toplamDegerKaybi);
    if (resKus) resKus.innerText = formatCurrencyTRY(kusurPayi) + ` (%${kusur} Kusur)`;
    if (resFai) resFai.innerText = '+' + formatCurrencyTRY(birikenFaiz) + ` (${ayFarki} Ay Faiz)`;
    if (resNet) resNet.innerText = formatCurrencyTRY(toplamTalep);
};

/* --- 5.3 YILLIK İZİN ÜCRETİ SAYFASI --- */
function getLeaveArticleHtml() {
    return `
        <div class="dedicated-calc-container">
            <h1 class="dedicated-calc-title">Yıllık İzin Ücreti Hesaplama (2026)</h1>
            <div class="dedicated-calc-meta">
                <span><i class="fa-solid fa-user-shield"></i> Bilen Hukuk & Arabuluculuk Ekibi</span>
                <span><i class="fa-regular fa-calendar"></i> Güncel 2026</span>
                <span><i class="fa-solid fa-calculator"></i> Hesaplama Araçları</span>
            </div>
            <p>2026 yılı güncel mevzuatına uygun yıllık izin ücreti hesaplama robotumuzu kullanarak hak ettiğiniz brüt ve net izin ücretini anında hesaplayabilirsiniz.</p>

            <div class="live-calc-box">
                <div class="live-calc-inputs">
                    <div class="calc-input-group">
                        <label>Aylık Brüt Ücret (Çıplak) (TL):</label>
                        <input type="number" id="liveSalary" class="calc-input-field" placeholder="Örn: 35000" oninput="runLiveLeaveCalc()">
                    </div>
                    <div class="calc-input-group">
                        <label>Kullanılmayan İzin Günü Sayısı:</label>
                        <input type="number" id="liveDays" class="calc-input-field" placeholder="Örn: 30" oninput="runLiveLeaveCalc()">
                    </div>
                </div>

                <table class="live-res-table">
                    <tr><td>Brüt İzin Ücreti:</td><td id="resBrut" style="font-weight:600; text-align:right;">₺0,00</td></tr>
                    <tr><td>Gelir Vergisi Kesintisi (%15):</td><td id="resGv" style="color:#b91c1c; text-align:right;">-₺0,00</td></tr>
                    <tr><td>Damga Vergisi Kesintisi (%0.759):</td><td id="resDv" style="color:#b91c1c; text-align:right;">-₺0,00</td></tr>
                    <tr><td>Net İzin Ücreti Alacağı:</td><td id="resNet" style="text-align:right;">₺0,00</td></tr>
                </table>
            </div>
        </div>

        <article class="article-body-content">
            <h2>Yıllık İzin Nedir?</h2>
            <p>İş ilişkisinin devamı şartıyla en az bir yıl çalışan işçiye verilen anayasal dinlenme hakkıdır. İş sözleşmesi sona ermeden ücrete dönüştürülemez.</p>
        </article>
    `;
}

window.runLiveLeaveCalc = function() {
    const salaryEl = document.getElementById('liveSalary');
    const daysEl = document.getElementById('liveDays');
    if (!salaryEl || !daysEl) return;

    const salary = parseFloat(salaryEl.value) || 0;
    const days = parseFloat(daysEl.value) || 0;

    const resB = document.getElementById('resBrut');
    const resG = document.getElementById('resGv');
    const resD = document.getElementById('resDv');
    const resN = document.getElementById('resNet');

    if (salary <= 0 || days <= 0) {
        if (resB) resB.innerText = '₺0,00';
        if (resG) resG.innerText = '-₺0,00';
        if (resD) resD.innerText = '-₺0,00';
        if (resN) resN.innerText = '₺0,00';
        return;
    }

    const brutTutar = (salary / 30) * days;
    const gvKesinti = brutTutar * 0.15;
    const dvKesinti = brutTutar * 0.00759;
    const netTutar = brutTutar - (gvKesinti + dvKesinti);

    if (resB) resB.innerText = formatCurrencyTRY(brutTutar);
    if (resG) resG.innerText = '-' + formatCurrencyTRY(gvKesinti);
    if (resD) resD.innerText = '-' + formatCurrencyTRY(dvKesinti);
    if (resN) resN.innerText = formatCurrencyTRY(netTutar);
};


/* ==========================================================================
   6. MODAL VE BASİT HESAPLAMA FONKSİYONLARI (Kıdem, İhbar, Faiz, vb.)
   ========================================================================== */
function initModalEvents() {
    const modalOverlay = document.getElementById('appModal');
    const closeBtn = document.getElementById('modalCloseBtn');
    
    if (closeBtn) closeBtn.addEventListener('click', () => modalOverlay.classList.remove('active'));
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) modalOverlay.classList.remove('active');
        });
    }

    document.querySelectorAll('.action-card').forEach(card => {
        card.addEventListener('click', () => { openModalById(card.getAttribute('data-id')); });
    });

    document.querySelectorAll('.calc-card, .calc-trigger-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-id') || card.getAttribute('data-calc');
            if (id === 'harc' || id === 'arac' || id === 'yillik') {
                openToolPage(id);
            } else if (id) {
                triggerCalcModal(id.replace('-calc', '')); 
            }
        });
    });
}

window.openModalById = function(id) {
    const data = appDatabase[id];
    if (!data) return;
    const modalBody = document.getElementById('modalBody');
    const modalTitle = document.getElementById('modalTitle');
    
    if(modalTitle) modalTitle.innerText = data.title;
    
    if (data.type === "info") {
        let listHtml = data.list.map(item => `<li><i class="fa-solid fa-circle-check" style="color:var(--primary-color);"></i> ${item}</li>`).join('');
        modalBody.innerHTML = `
            <p>${data.desc}</p>
            <h4 style="margin: 1.5rem 0 0.5rem; color:var(--navy-dark); font-size:1.05rem;">Hizmet ve Dava Kapsamı:</h4>
            <ul class="modal-info-list">${listHtml}</ul>
            <div style="margin-top: 2rem; background: var(--bg-main); padding: 1.5rem; border-radius: var(--radius-sm); text-align: center;">
                <p style="margin-bottom: 1rem; font-weight:600; font-size:0.9rem;">Bu konuda hukuki danışmanlık almak ister misiniz?</p>
                <button class="calc-execute-btn" onclick="document.getElementById('appModal').classList.remove('active'); document.getElementById('cSubject').value='Diğer Hukuki Süreçler'; document.getElementById('cName').focus();">Danışma Formunu Doldur</button>
            </div>
        `;
    } else if (data.type === "policy") {
        modalBody.innerHTML = `<div style="font-size: 0.95rem; line-height: 1.8;">${data.content}</div>`;
    }

    document.getElementById('appModal').classList.add('active');
};

window.triggerCalcModal = function(calcId) {
    const data = appDatabase[calcId];
    if (!data) return;

    const modalBody = document.getElementById('modalBody');
    const modalTitle = document.getElementById('modalTitle');
    
    if(modalTitle) modalTitle.innerText = data.title;
    if(modalBody) modalBody.innerHTML = generateCalcHtml(calcId, data.func);
    
    document.getElementById('appModal').classList.add('active');
};

function generateCalcHtml(id, funcName) {
    let inputs = '';
    switch(id) {
        case 'mesai':
            inputs = `
                <div class="calc-input-group"><label>Aylık Brüt Maaş (TL):</label><input type="number" id="inp1" class="calc-input-field"></div>
                <div class="calc-input-group"><label>Haftalık Fazla Mesai Saati:</label><input type="number" id="inp2" class="calc-input-field"></div>
                <div class="calc-input-group"><label>Çalışılan Ay Sayısı:</label><input type="number" id="inp3" class="calc-input-field"></div>
            `;
            break;
        case 'ihbar':
            inputs = `
                <div class="calc-input-group"><label>Aylık Brüt Maaş (TL):</label><input type="number" id="inp1" class="calc-input-field"></div>
                <div class="calc-input-group"><label>Çalışma Süresi:</label><select id="inp2" class="calc-input-field"><option value="2">6 Aydan Az (2 Hafta İhbar)</option><option value="4">6 Ay - 1,5 Yıl Arası (4 Hafta İhbar)</option><option value="6">1,5 Yıl - 3 Yıl Arası (6 Hafta İhbar)</option><option value="8">3 Yıldan Fazla (8 Hafta İhbar)</option></select></div>
            `;
            break;
        case 'infaz':
            inputs = `
                <div class="calc-input-group"><label>Alınan Ceza (Yıl):</label><input type="number" id="inp1" class="calc-input-field"></div>
                <div class="calc-input-group"><label>Alınan Ceza (Ay):</label><input type="number" id="inp2" class="calc-input-field" value="0"></div>
            `;
            break;
        case 'kidem':
            inputs = `
                <div class="calc-input-group"><label>İşe Başlama Tarihi:</label><input type="date" id="inp1" class="calc-input-field"></div>
                <div class="calc-input-group"><label>İşten Çıkış Tarihi:</label><input type="date" id="inp2" class="calc-input-field"></div>
                <div class="calc-input-group"><label>Son Brüt Maaş (TL):</label><input type="number" id="inp3" class="calc-input-field"></div>
            `;
            break;
        case 'haftalik':
        case 'bayram':
            inputs = `
                <div class="calc-input-group"><label>Aylık Brüt Maaş (TL):</label><input type="number" id="inp1" class="calc-input-field"></div>
                <div class="calc-input-group"><label>Çalışılan Gün Sayısı:</label><input type="number" id="inp2" class="calc-input-field"></div>
            `;
            break;
        case 'isgucu':
            inputs = `
                <div class="calc-input-group"><label>Aylık Net Gelir (TL):</label><input type="number" id="inp1" class="calc-input-field"></div>
                <div class="calc-input-group"><label>Maluliyet Oranı (%):</label><input type="number" id="inp2" class="calc-input-field"></div>
                <div class="calc-input-group"><label>Kalan Aktif Çalışma Süresi (Yıl):</label><input type="number" id="inp3" class="calc-input-field"></div>
            `;
            break;
        case 'issizlik':
            inputs = `
                <div class="calc-input-group"><label>Son 4 Aylık Brüt Ortalaması (TL):</label><input type="number" id="inp1" class="calc-input-field"></div>
                <div class="calc-input-group"><label>Son 3 Yıldaki Prim Gün Sayısı:</label><select id="inp2" class="calc-input-field"><option value="6">600 - 899 Gün (6 Ay)</option><option value="8">900 - 1079 Gün (8 Ay)</option><option value="10">1080 Gün ve Üzeri (10 Ay)</option></select></div>
            `;
            break;
        case 'arabulucu':
            inputs = `<div class="calc-input-group"><label>Uyuşmazlık Bedeli (TL):</label><input type="number" id="inp1" class="calc-input-field"></div>`;
            break;
        case 'faiz':
            inputs = `
                <div class="calc-input-group"><label>Asıl Alacak Tutarı (TL):</label><input type="number" id="inp1" class="calc-input-field"></div>
                <div class="calc-input-group"><label>Gecikilen Süre (Ay):</label><input type="number" id="inp2" class="calc-input-field"></div>
                <div class="calc-input-group"><label>Faiz Türü:</label><select id="inp3" class="calc-input-field"><option value="24">Yasal Temerrüt Faizi (%24)</option><option value="40">Ticari Avans Faizi (%40)</option></select></div>
            `;
            break;
        case 'smm':
            inputs = `<div class="calc-input-group"><label>Brüt Ücret (TL):</label><input type="number" id="inp1" class="calc-input-field"></div>`;
            break;
        case 'icra':
            inputs = `<div class="calc-input-group"><label>Asıl Alacak Tutarı (TL):</label><input type="number" id="icraAmount" class="calc-input-field"></div>`;
            funcName = "execIcra()";
            break;
    }

    return `
        ${inputs}
        <button class="calc-execute-btn" onclick="${funcName}">Hesaplamayı Başlat</button>
        <div id="calcResArea" class="calc-result-box" style="display:none;"></div>
    `;
}

function showResult(val, title, disclaimer = "") {
    const area = document.getElementById('calcResArea');
    if (!area) return;
    area.style.display = 'block';
    area.innerHTML = `
        <span class="calc-result-title">${title}</span>
        <div class="calc-result-value">${val}</div>
        ${disclaimer ? `<p style="font-size:0.75rem; color:#64748b; margin-top:10px;">${disclaimer}</p>` : ''}
    `;
}

window.calcMesai = function() {
    const brut = parseFloat(document.getElementById('inp1')?.value) || 0;
    const saat = parseFloat(document.getElementById('inp2')?.value) || 0;
    const ay = parseFloat(document.getElementById('inp3')?.value) || 0;
    if (brut <= 0) return;
    const net = (brut / 225) * 1.5 * saat * 4.33 * ay * 0.715;
    showResult(formatCurrencyTRY(net), "Tahmini Net Fazla Mesai Alacağı");
};

window.calcIhbar = function() {
    const brut = parseFloat(document.getElementById('inp1')?.value) || 0;
    const hafta = parseFloat(document.getElementById('inp2')?.value) || 0;
    if (brut <= 0) return;
    const brutIhbar = (brut / 30) * (hafta * 7);
    const net = brutIhbar - (brutIhbar * 0.15) - (brutIhbar * 0.00759);
    showResult(formatCurrencyTRY(net), "Net İhbar Tazminatı Tutarı");
};

window.calcInfaz = function() {
    const yil = parseFloat(document.getElementById('inp1')?.value) || 0;
    const ay = parseFloat(document.getElementById('inp2')?.value) || 0;
    const yatarAy = ((yil * 12 + ay) / 2) - 36;
    if (yatarAy <= 0) showResult("Yatarı Yoktur", "İnfaz Sonucu");
    else showResult(`${Math.floor(yatarAy / 12)} Yıl, ${Math.floor(yatarAy % 12)} Ay`, "Tahmini Cezaevi Yatarı");
};

window.calcKidem = function() {
    const bas = new Date(document.getElementById('inp1')?.value);
    const bit = new Date(document.getElementById('inp2')?.value);
    const brut = parseFloat(document.getElementById('inp3')?.value) || 0;
    if (isNaN(bas) || isNaN(bit) || brut <= 0) return;
    const yil = Math.ceil(Math.abs(bit - bas) / (1000 * 3600 * 24)) / 365.25;
    const brutKidem = Math.min(brut, 46000) * yil; // 2026 Tahmini Tavan
    showResult(formatCurrencyTRY(brutKidem - (brutKidem * 0.00759)), "Net Kıdem Tazminatı");
};

window.calcHaftalik = window.calcBayram = function() {
    const brut = parseFloat(document.getElementById('inp1')?.value) || 0;
    const gun = parseFloat(document.getElementById('inp2')?.value) || 0;
    if (brut <= 0) return;
    showResult(formatCurrencyTRY(((brut / 30) * gun) * 0.715), "Tahmini Net Ücret Alacağı");
};

window.calcIsgucu = function() {
    const gelir = parseFloat(document.getElementById('inp1')?.value) || 0;
    const oran = parseFloat(document.getElementById('inp2')?.value) || 0;
    const yil = parseFloat(document.getElementById('inp3')?.value) || 0;
    if (gelir <= 0) return;
    showResult(formatCurrencyTRY((gelir * 12) * (oran / 100) * yil), "Tahmini Maluliyet Tazminatı");
};

window.calcIssizlik = function() {
    const brut = parseFloat(document.getElementById('inp1')?.value) || 0;
    const sure = document.getElementById('inp2')?.value;
    if (brut <= 0) return;
    const maas = Math.min(brut * 0.40, 20002.50 * 0.80);
    showResult(`${formatCurrencyTRY(maas - (maas * 0.00759))} / Ay (${sure} Ay)`, "Aylık Net İşsizlik Ödeneği");
};

window.calcArabulucu = function() {
    const tutar = parseFloat(document.getElementById('inp1')?.value) || 0;
    if (tutar <= 0) return;
    showResult(formatCurrencyTRY(tutar * 0.06), "Asgari Arabuluculuk Ücreti");
};

window.calcFaiz = function() {
    const tutar = parseFloat(document.getElementById('inp1')?.value) || 0;
    const ay = parseFloat(document.getElementById('inp2')?.value) || 0;
    const oran = parseFloat(document.getElementById('inp3')?.value) || 0;
    if (tutar <= 0) return;
    showResult(formatCurrencyTRY(tutar * (oran / 100 / 12) * ay), "Biriken Faiz Tutarı");
};

window.calcSMM = function() {
    const brut = parseFloat(document.getElementById('inp1')?.value) || 0;
    if (brut <= 0) return;
    showResult(formatCurrencyTRY(brut - (brut * 0.20) + (brut * 0.20)), "Net Tahsil Edilecek Tutar");
};

window.execIcra = function() {
    const val = parseFloat(document.getElementById("icraAmount")?.value) || 0;
    if(val <= 0) return;
    showResult(formatCurrencyTRY(val + (val * 0.16) + 650), "Tahmini Toplam Takip Tutarı");
};


/* ==========================================================================
   7. FORM İŞLEMLERİ, TOAST BİLDİRİMLERİ VE AKORDEON
   ========================================================================== */
function initForms() {
    const form1 = document.getElementById('consultationForm');
    const form2 = document.getElementById('toolContactForm');

    if (form1) {
        form1.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('cName')?.value || '';
            showToast(`Sayın ${name}, talebiniz büromuza ulaştı.`);
            form1.reset();
        });
    }

    if (form2) {
        form2.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('tName')?.value || '';
            showToast(`Sayın ${name}, danışma talebiniz avukatlarımıza iletildi.`);
            form2.reset();
        });
    }
}

function showToast(msgText) {
    const t = document.getElementById("toastBox");
    const msg = document.getElementById("toastMsg");
    if (!t || !msg) return;
    msg.innerText = msgText;
    t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 4000);
}


/* ==========================================================================
   8. ÇOKLU DİL MOTORU (GOOGLE TRANSLATE + ÇEREZ YÖNETİMİ + RTL)
   ========================================================================== */

function initLanguageSwitcher() {
    const switcher = document.querySelector('.lang-switcher');
    const btn = document.getElementById('langDropdownBtn');

    if (btn && switcher) {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            switcher.classList.toggle('active');
        });

        document.addEventListener('click', () => {
            switcher.classList.remove('active');
        });
    }
}

function clearGoogTransCookies() {
    const host = window.location.hostname;
    const domains = ['', host, '.' + host];
    const paths = ['/', '/;'];
    
    ['googtrans', 'googtrans_saved'].forEach(cookieName => {
        paths.forEach(p => {
            domains.forEach(d => {
                document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" + p + (d ? "; domain=" + d : "");
            });
        });
    });
}

function setGoogTransCookie(targetLang) {
    clearGoogTransCookies();
    const host = window.location.hostname;
    const cookieVal = '/tr/' + targetLang;
    
    document.cookie = "googtrans=" + cookieVal + "; path=/;";
    if (host && host !== 'localhost' && !/^\d+\.\d+\.\d+\.\d+$/.test(host)) {
        document.cookie = "googtrans=" + cookieVal + "; path=/; domain=" + host + ";";
        document.cookie = "googtrans=" + cookieVal + "; path=/; domain=." + host + ";";
    }
}

window.setSiteLanguage = function(langCode, flagIcon, langLabel) {
    const switcher = document.querySelector('.lang-switcher');
    if (switcher) switcher.classList.remove('active');

    // 1. Türkçe seçildiğinde çeviriyi tamamen sıfırla
    if (langCode === 'tr') {
        localStorage.removeItem('bilen_selected_lang');
        localStorage.removeItem('bilen_selected_flag');
        localStorage.removeItem('bilen_selected_label');
        clearGoogTransCookies();
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'tr');
        
        const combo = document.querySelector('.goog-te-combo');
        if (combo) {
            combo.value = '';
            combo.dispatchEvent(new Event('change'));
        }
        window.location.reload();
        return;
    }

    // 2. Yabancı diller için hafıza ve RTL kaydı
    localStorage.setItem('bilen_selected_lang', langCode);
    localStorage.setItem('bilen_selected_flag', flagIcon);
    localStorage.setItem('bilen_selected_label', langLabel);

    if (langCode === 'ar' || langCode === 'fa') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', langCode);
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', langCode);
    }

    // 3. Çerezi yaz ve Google Translate tetikle
    setGoogTransCookie(langCode);

    const combo = document.querySelector('.goog-te-combo');
    if (combo) {
        combo.value = langCode;
        combo.dispatchEvent(new Event('change'));
    } else {
        // Sayfada ilk defa çalıştırılıyorsa yenileyerek çeviriyi başlat
        window.location.reload();
    }

    updateLanguageUI(langCode, flagIcon, langLabel);
};

function updateLanguageUI(langCode, flagIcon, langLabel) {
    const label = document.getElementById('currentLangLabel');
    const flag = document.getElementById('currentFlag');

    if (label) label.innerText = langLabel || langCode.toUpperCase();
    if (flag && flagIcon) flag.innerText = flagIcon;

    document.querySelectorAll('.lang-item').forEach(item => {
        if (item.getAttribute('data-lang') === langCode) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function applySavedLanguage() {
    const savedLang = localStorage.getItem('bilen_selected_lang');
    const savedFlag = localStorage.getItem('bilen_selected_flag') || '🇹🇷';
    const savedLabel = localStorage.getItem('bilen_selected_label') || 'TR';

    if (!savedLang || savedLang === 'tr') {
        updateLanguageUI('tr', '🇹🇷', 'TR');
        return;
    }

    updateLanguageUI(savedLang, savedFlag, savedLabel);

    if (savedLang === 'ar' || savedLang === 'fa') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', savedLang);
    }

    // Sayfa açıldığında Google Translate Select hazır olunca otomatik tetikle
    let attempts = 0;
    const checkInterval = setInterval(() => {
        attempts++;
        const combo = document.querySelector('.goog-te-combo');
        if (combo) {
            clearInterval(checkInterval);
            if (combo.value !== savedLang) {
                combo.value = savedLang;
                combo.dispatchEvent(new Event('change'));
            }
        }
        if (attempts > 30) clearInterval(checkInterval);
    }, 200);
}


/* ==========================================================================
   9. DOMContentLoaded BAŞLATICI
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    // Mobil Menü
    const toggle = document.getElementById("mobileToggle");
    const menu = document.getElementById("navMenu");
    if (toggle && menu) {
        toggle.addEventListener("click", () => menu.classList.toggle("mobile-open"));
        menu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => menu.classList.remove("mobile-open"));
        });
    }

    // Modal, Form ve Dil Tetikleyicileri
    initModalEvents();
    initForms();
    initLanguageSwitcher();
    applySavedLanguage();

    // SSS Akordeon Eventleri
    initFaqAccordion();
});

function initFaqAccordion() {
    document.querySelectorAll('.faq-item').forEach(item => {
        const q = item.querySelector('.faq-question');
        if (q) {
            q.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
                if (!isActive) item.classList.add('active');
            });
        }
    });
}