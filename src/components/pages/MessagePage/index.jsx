//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBContainer,
  MDBBtn,
  MDBAlert,
  MDBIcon,
} from "mdbreact";

//> CSS
import "./messagepage.scss";

class MessagePage extends React.Component {
  render() {
    return (
      <MDBContainer id="message" className="py-5 my-5 text-center">
        {this.props.location.pathname === "/thankyou" &&
        <>
          <h2>
          Thank you for considering to donate
          <MDBIcon icon="heart" className="pink-text ml-2"/>
          </h2>
          <p className="lead mt-3 mb-0">
          We are a <strong>non-profit</strong>, <strong>open source</strong> Social Network.
          </p>
          <p>
          We therefore require donations to stay up-and-running.
          </p>
          <p className="mb-0">If you change your mind later, you can always</p>
          <MDBBtn
          color="green"
          size="md"
          onClick={() => this.setState({modalDonate: true})}
          >
          Donate
          </MDBBtn>
        </>
        }
        {this.props.location.pathname === "/about" &&
        <div className="text-left mt-5">
          <h2>
          Impressum
          </h2>
          <p className="lead mb-0 font-weight-bold">Gutschein2Go, ein Service der Werbeagentur Christian Aichner</p>
          <p>
            <strong>Werbeagentur Christian Aichner</strong>
            <br/>
            Tel: +43 681 205 027 54
            <br/>
            Emailwerkstraße 29
            <br/>
            9523 Villach-Landskron
            <br/>
            <MDBBtn
            color="orange"
            href="mailto:info@gutschein2go.at"
            >
              <MDBIcon far icon="envelope" />
              Kontakt
            </MDBBtn>
          </p>
          <p className="lead mb-2">
          Haftungsausschluss
          </p>
          <p>
          Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus auf diese Webseite 
          verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, 
          nicht mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile des Dokumentes in ihrem 
          Inhalt und ihrer Gültigkeit davon unberührt.
          </p>
          <p className="lead mb-2">
          Haftung für Inhalte dieser Webseite
          </p>
          <p>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und 
          Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir für eigene 
          Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, 
          übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf 
          eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von 
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch 
          erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von 
          entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
          <p className="lead mb-2">
          Haftung für Links auf Webseiten Dritter
          </p>
          <p>
          Unser Angebot enthält Links zu externen Websites. Auf den Inhalt dieser externen Webseiten haben wir 
          keinerlei Einfluss. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die 
          Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. 
          Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
          Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche 
          Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht 
          zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
          <p className="lead mb-2">
          Urheberrecht
          </p>
          <p>
          Die Betreiber dieser Webseite sind bemüht, stets die Urheberrechte anderer zu beachten bzw. auf selbst 
          erstellte sowie lizenzfreie Werke zurückzugreifen. Die durch die Seitenbetreiber erstellten Inhalte und 
          Werke auf dieser Webseite unterliegen dem Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. 
          Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des 
          Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und 
          Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
        </div>
        }
        {this.props.location.pathname === "/agb" &&
        <div className="text-left mt-5">
          <div class="content-main col-lg-8 col-lg-offset-2">
            <p>Allgemeine Geschäftsbedingungen (kurz „AGB)“ für den Online-Vertrieb von Gutscheinen an Verbraucher über 
            www.gutschein2go.at (kurz "G2G Webshop“). Für Unternehmer gelten die untenstehenden gesonderten Bedingungen.
            <br/><br/>Die folgenden Bestimmungen sind für alle Gutscheinformen sinngemäß anzuwenden.<br/><br/>
            Werbeagentur Christian Aichner &amp; (im folgenden kurz "Gutschein2Go"), Emailwerkstraße 29, 9523 
            Villach-Landskron ist Hersteller und Herausgeber der Website unter <a href="http://www.gutschein2go.at">
            www.gutschein2go.at</a>.
            <br/><br/>
            <strong>§ 1 Grundsätzliches</strong><br/>
            Diese AGB regeln Ihre und Gutschein2Go vertraglichen Rechte und Pflichten, die aufgrund Ihrer Nutzung der 
            Website, Ihrer Bestellung und/ oder des Abschlusses eines oder mehrerer Verträge über Gutschein2Go-Produkte 
            (siehe § 6) über den G2G-Webshop sowie über den Erwerb über stationäre Vertriebspartner entstehen.<br/>
            Wenn Sie die Website von Gutschein2Go nutzen bzw. eine Bestellung über den G2G-Webshop aufgeben, 
            akzeptieren Sie diese AGB in derjenigen Fassung, die zum Zeitpunkt Ihrer Bestellung gültig ist. 
            Sie können die AGB jederzeit über einen Link von der Homepage von www.gutschein2go.at einsehen, ausdrucken 
            und / oder speichern. Da sich diese AGB ohne vorherige Ankündigung jederzeit ändern können, empfehlen wir 
            Ihnen, diese AGB jedes Mal zu lesen, wenn Sie die Website nutzen bzw. eine Bestellung aufgeben möchten.<br/>
            <br/>
            <strong>§ 2 Fragen zum G2G-Webshop</strong>
            <br/>Sollten Sie irgendwelche Fragen oder Beschwerden im Zusammenhang mit dem G2G-Webshop oder zu 
            Gutschein2Go-Produkten (siehe § 6) haben, wie zB<br/>
            1. zu den Funktionalitäten des G2G-Webshops,<br/>
            2. zum Bestellvorgang im Allgemeinen,<br/>
            3. zu den angebotenen Gutschein2Go-Produkten, oder<br/>
            4. zur Rückgabe von gekauften Gutschein2Go-Produkten,<br/>
            kontaktieren Sie bitte den Kundendienst von Gutschein2Go unter <a href="mailto:info@gutschein2go.at">
            info@gutschein2go.at</a>.<br/><br/>
            <strong>§ 3 Wer kann im G2G-Webshop bestellen?</strong><br/>
            Wenn Sie eine Bestellung über den G2G-Webshop als Verbraucher abgeben, erklären Sie daher ausdrücklich, 
            dass Sie ein Verbraucher sind.<br/>Wenn Sie kein Verbraucher sind, gelten die untenstehenden Bedingungen für 
            Unternehmer. Wenn Sie die AGB nicht akzeptieren möchten, geben Sie bitte keine Bestellung über den 
            G2G-Webshop ab. Andernfalls behält sich Gutschein2Go vor, bereits aufgegebene Bestellungen abzulehnen bzw. 
            solche Bestellungen zu stornieren. Jedenfalls haben Sie diesbezüglich Gutschein2Go schadlos zu halten.<br/>
            Sie erklären außerdem, den G2G-Webshop und die entsprechende Website nur im Rahmen der dafür vorgesehenen 
            Nutzung zu verwenden. Eine rechtsmissbräuchliche Verwendung des G2G-Webshops oder der Website, wie zB 
            unbefugte Manipulationen, Hacking- oder „Denial of Service“-Attacken, unrichtige Angabe(n) von Daten, 
            unbefugte Verwendung von Daten Dritter, unbefugte Übernahme von Inhalten etc. machen Sie gegenüber 
            Gutschein2Go schadenersatzpflichtig und können auch darüberhinausgehende zivil- und/oder strafrechtliche 
            Konsequenzen haben.<br/><br/>
            <strong>§ 4 Liefergebiet</strong><br/>
            Die Gutscheine können innerhalb Österreichs geliefert werden. Ein Versand in andere Länder wird nach 
            Absprache individuell abgewickelt.</p>
            <p>Dieses Liefergebiet gilt hinsichtlich aller Gutschein2Go-Produkte (siehe § 6).<br/>&emsp;<br/>
            <strong>§ 5 Akzeptierte Zahlungsmittel, Fälligkeit und Verzugszinsen im G2G-Webshop</strong><br/>
            Der G2G-Webshop akzeptiert nur die Bezahlung mittels der von Shopify zur Verfügung gestellten 
            Zahlungsmittel. Diese können sich jederzeit ohne Ankündigung ändern. Ersichtlich sind die Zahlungsmittel im 
            Checkout des G2G-Webshops; Im Falle einer Bezahlung per Kreditkarte oder Online-Banking werden Sie im 
            Rahmen des Bezahlungsvorgangs auf die Website eines Zahlungsdienstleisters, nämlich Shopify weitergeleitet. 
            Die dortigen Vorgänge stehen allein im Einflussbereich und der Verantwortung des Zahlungsdienstleisters 
            bzw. des Anbieters der Zahlungsinstrumentarien und es kann Gutschein2Go dafür keine Verantwortung 
            übernehmen.<br/><br/>
            <strong>§ 6 Bestellvorgang und Abschluss des Vertrages über Gutschein2Go-Produkte</strong><br/>
            Sie können Bestellungen in unserem Webshop in deutscher Sprache durchführen. Die Gutscheine können online 
            bestellt werden.<br/>Die einzelnen technischen Schritte, die zu Ihrer Online-Bestellung führen, sind wie 
            folgt:<br/>a) Im ersten Schritt des G2G-Webshop wählen Sie den Wert und die Anzahl der Gutscheine 
            (Wertgutscheine) oder den Produktgutschein und die Anzahl.<br/>
            b) Im nächsten Schritt werden Sie nach Checkout zu Shopify weitergeleitet. Geben Sie dort alle von Shopify 
            geforderten Daten ein.<br/>
            c) Wenn alle Ihre Eingaben korrekt sind, geben Sie Ihre Bestellung durch das Anklicken des Buttons 
            „Pay Now“ sowie durch das vorherige Anklicken der Checkbox „Ich akzeptiere die Allgemeinen 
            Geschäftsbedingungen (AGB)<br/>
            d) Bei erfolgreicher Zahlungsabwicklung erhalten Sie sowohl auf der Website eine Bestellbestätigung als 
            auch per E-Mail eine Bestätigung, dass Ihre Bestellung technisch auf dem Server von Gutschein2Go eingelangt 
            ist. Dieser Bestätigungs E-Mail sind auch gegenständliche AGB samt Widerrufsformular angeschlossen. Zum 
            tatsächlichen Abschluss des Vertrages über Gutschein2Go-Produkte siehe unten Absatz 3;<br/>
            Der Vertrag zwischen Ihnen und Gutschein2Go kommt erst dann zustande, wenn Gutschein2Go Ihre Bestellung 
            (rechtlich „Angebot“) angenommen hat. Gutschein2Go wird Ihre Bestellung annehmen, indem Gutschein2Go Ihnen 
            eine Bestätigung über Ihre Bestellung der jeweiligen Gutschein2Go-Produkte an diejenige Email-Adresse 
            zusendet, die Sie Gutschein2Go im Zuge Ihrer Bestellungsaufgabe bekanntgegeben haben. Sobald Gutschein2Go 
            diese Bestellbestätigung an die genannte E-Mail-Adresse absendet, ist der Vertrag zustande gekommen.</p>
            <br/><br/>
            <strong>§ 7 Preise</strong><br/>
            Der Vertrag über Gutschein2Go-Produkte kommt mit demjenigen Preis in EUR zustande, der am Tag Ihrer 
            Bestellung (siehe dazu § 6 Absatz 2) im G2G-Webshop jeweils gültig war. Die angegebenen Preise sind stets 
            unverbindlich und daher Irrtümer vorbehalten.<br/>Der (Gesamt)Preis setzt sich aus dem Auftragswert, den 
            etwaigen Verpackungs- und Versandkosten (siehe § 9) sowie der anwendbaren Umsatzsteuer zusammen. Die 
            angebotenen Preise der Gutschein2Go-Produkte verstehen sich also als Bruttopreise und beinhalten allfällige 
            gesetzliche Steuern und Abgaben.<br/><br/>
            <strong>§ 8 Versand, Verpackungs- und Versandkosten, Rechnung und Versandüberprüfung</strong><br/><br/>
            a) Versand per POST<br/><br/>Die Lieferung von physischen Gutschein2Go-Produkten erfolgt ausschließlich von 
            Österreich als Erfüllungsort aus an die von Ihnen bekanntgegebene Lieferadresse. Nutzung und Gefahr gehen 
            auf Sie über, sobald die Gutschein2Go-Produkte an Sie oder an einen vom Transporteur verschiedenen Dritten 
            abgeliefert werden. Die Versandkosten richten sich nach der ausgewählten Zahlart und dem Zustellservice.
            <br/><br/>Die von Ihnen gekauften physischen Gutschein2Go-Produkte werden grundsätzlich zu 
            Standardversandbedingungen zu den üblichen Geschäftszeiten angeliefert. Wird der Kunde nicht am Zustellort 
            angetroffen, gilt der dann vorgesehene Vorgang des jeweiligen Lieferpartners Ihrer Lieferadresse. Die für 
            Ihre konkrete Bestellung etwaig anfallenden Versandkosten werden Ihnen in der Bestellübersicht vor dem 
            Absenden Ihrer Bestellung separat angezeigt.<br/>
            <p>b) E-Mail<br/><br/>Die Gutscheine können vom Kunden nach erfolgter Zahlung und Bearbeitung (es fallen 
            keine Versandkosten an) direkt per E-Mail erhalten werden. Die Gutscheine werden vom Kunden selbst 
            ausgedruckt oder via elektronischem Gerät bei unserem Partnerbetrieb vorgezeigt. Der Kunde ist für die 
            Geheimhaltung der Gutscheinvorlage selbst verantwortlich. Gutschein2Go haftet nicht für den Missbrauch der 
            Gutscheinvorlage (siehe auch § 9 (2)). Jeder Gutschein kann nur einmal eingelöst werden.<br/><br/>
            Der Versand der Rechnung erfolgt per E-Mail an die im Rahmen der Bestellung angegebene Adresse.<br/>
            Um Ihren Einkauf möglichst einwandfrei und rasch abwickeln zu können, werden Sie ersucht, jede Ihrer 
            Lieferungen unmittelbar nach Erhalt zu öffnen und diese sowohl auf ihre Vollständigkeit als auch auf 
            eventuelle Beschädigungen hin zu prüfen. Gutschein2Go wäre Ihnen dankbar, wenn Sie allfällige Reklamationen 
            ehestmöglich an die Kontaktadresse von Gutschein2Go richten, die ganz oben in diesen AGB angeführt ist. 
            Ihre gesetzlichen Gewährleistungsrechte (siehe § 15) bleiben davon unberührt.<br/><br/>
            <strong>§ 9 Besondere Bestimmungen betreffend die Gutscheine von Gutschein2Go<br/></strong><br/>
            1) Einlösung der Gutscheine<br/>
            Die Gutscheine können ausschließlich in den im Zeitpunkt der Einlösung bei unseren Partnerbetrieben 
            eingelöst werden. Der Gegenwert eines einzelnen Gutscheins entspricht dem gekauften Wert. Eine 
            Teileinlösung ist nicht möglich. Beträgt der Einkaufswert weniger als der Wert des erstandenen Gutscheins, 
            so verfällt der restliche Gutscheinwert.</p>
            <p>Der Vertrag über die Inanspruchnahme dieser Leistungen kommt ausschließlich zwischen dem Dienstleister 
            (Partnerbetrieb) und dem Gutscheininhaber zustande. Gutschein2Go haftet nicht für Ansprüche aus diesen 
            Vertragsverhältnissen.</p>
            <p>2) Einlösbarkeit / Gültigkeitsdauer</p>
            <p>Gutscheine sind Urkunden und dürfen ausschließlich in der bei Kauf von Gutschein2Go vorgegebener Form 
            (als Papiergutschein, Geschenkkarte, E-Mail Gutschein, etc.) verwendet werden. Insbesondere dürfen 
            Gutscheinnummern nicht von der ursprünglichen Gutscheinform entkoppelt und auch nicht (über Fremdanbieter) 
            verwertet werden.</p>
            <p>Die Gutscheine können generell 36 Monate ab Kauf bzw. Aktivierung eingelöst werden.</p>
            <p>Gutscheinkarten bzw. E-Mail Gutscheine welche über den Webshop 
            (<a href="http://www.gutschein2go.at">www.gutschein2go.at</a>) erworben wurden sind sofort nach Kauf 
            gültig. Die Aktivierung der Gutscheine<br/> erfolgt in der Regel 24 Stunden nach Kauf.</p>
            <p>3) Verlängerung der Gültigkeitsdauer / Erstattung nach Ablauf der Gültigkeitsdauer</p>
            <p>a) Verlängerung der Gültigkeitsdauer<br/>Innerhalb von einem Jahr nach Erreichen des Gültigkeitsdatums 
            ist einmalig eine kostenlose Verlängerung der Gültigkeitsdauer der Gutscheine um ein weiteres Jahr ab 
            entsprechender Anfrage per E-Mail an info@gutschein2go.at unter Bekanntgabe der Nummer des abgelaufenen 
            Gutscheins möglich. Hierauf wird dem Inhaber an eine ihm bekannt zu gebende E-Mail-Adresse oder Postadresse 
            eine Bestätigung über die Verlängerung zu dem abgelaufenen Gutschein mit dem entsprechend verlängerten 
            Gültigkeitsdatum übermittelt, die gleichzeitig mit dem Gutschein bei der Einlösung vorzuweisen ist. Eine 
            nochmalige Verlängerung ist nicht möglich.<br/><br/>
            b) Erstattung<br/>Innerhalb von einem Jahr nach Erreichen des Gültigkeitsdatums ist gegen<br/>
            Übermittlung eines abgelaufenen Gutscheins im Original und Bekanntgabe einer Kontoverbindung eine 
            Erstattung des Werts abzüglich einer Verwaltungs- und Bearbeitungsgebühr in Höhe von 15% des Werts, 
            zumindest jedoch EUR 5,00 je Erstattungsvorgang, möglich. Der abgelaufene Gutschein muss hierfür innerhalb 
            von einem Jahr nach Erreichen des Gültigkeitsdatums im Original bei uns einlangen. Im Fall einer 
            ausländischen Kontoverbindung gehen etwaige Überweisungsspesen zu Lasten des Empfängers.</p>
            <p>4) Umtausch / Barablöse<br/>Die Gutscheine sind von Rückgabe und Umtausch ausgeschlossen; eingereichte 
            Gutscheine werden nicht in bar ausgezahlt – hiervon ausgenommen ist eine einmalige Verlängerung oder eine 
            Erstattung nach Ablauf der Gültigkeitsdauer (siehe Punkt 3). Bei der Einlösung der Gutscheine ist eine 
            Bargeldrückgabe auf Differenzbeträge nicht möglich.</p>
            <p>5) Verlust<br/>Bei Verlust, Diebstahl oder Entwertung von Gutscheinen kann kein Ersatz durch Gutschein2Go 
            geleistet werden.<br/><br/>
            <strong>§ 10 Persönliche Daten (Datenschutz)</strong><br/>
            Bei Abschluss eines Vertragsverhältnisses werden persönliche Daten unseres Kunden verarbeitet. Siehe auch 
            unsere Datenschutzinformationen (www.gutschein2go.at/privacy)<br/><br/>
            <strong>§ 11 Urheber- und Kennzeichenrecht</strong><br/>
            Gutschein2Go ist bestrebt, die Urheberrechte der verwendeten Grafiken und Texte zu beachten, von ihm selbst 
            erstellte Grafiken und Texte zu nutzen oder auf lizenzfreie Grafiken und Texte zurückzugreifen. Alle 
            innerhalb des Internetangebotes genannten und ggf. durch Dritte geschützten Marken- und Warenzeichen 
            unterliegen uneingeschränkt den Bestimmungen des jeweils gültigen Kennzeichenrechts und den Besitzrechten 
            der jeweiligen eingetragenen Eigentümer. Allein aufgrund der bloßen Nennung ist nicht der Schluss zu 
            ziehen, dass Markenzeichen nicht durch Rechte Dritter geschützt sind! Das Copyright für veröffentlichte, 
            von Gutschein2Go selbst erstellte Objekte bleibt allein bei Gutschein2Go.<br/>
            Eine Vervielfältigung oder Verwendung solcher Grafiken und Texte in anderen elektronischen oder gedruckten 
            Publikationen ist ohne ausdrückliche Zustimmung von Gutschein2Go nicht gestattet.<br/><br/>
            <strong>§ 12 Haftung "Links"</strong><br/>
            Es wird keine Verantwortung für rechtswidrige Inhalte auf von dieser Website mittels direkter oder 
            indirekter Hyperlinks verwiesenen externen Websites übernommen und es haftet hierfür ausschließlich der 
            Anbieter der jeweiligen externen Website bzw externen Informationen.<br/>&emsp;<br/>
            <strong>§ 13 Rücktritt (Widerrufsbelehrung)</strong><br/>
            Als Verbraucher im Sinne der Verbraucherschutzbestimmungen haben Sie das grundsätzliche Recht, von jedem 
            Vertrag aus dem G2G-Webshop binnen vierzehn Tagen ohne Angabe von Gründen zurückzutreten. Wenn Sie mehrere 
            Gutschein2Go-Produkte in Kombination zu einem Pauschalpreis bestellt haben, können Sie Ihren Rücktritt nur 
            hinsichtlich der gesamten Kombination von Gutschein2Go-Produkten ausüben.<br/>Ihre vierzehntägige 
            Rücktrittsfrist beginnt dabei <br/>
            a) mit dem Tag, an dem Sie oder ein von Ihnen benannter, nicht als 
            Beförderer tätiger Dritter den Besitz am Gutschein2Go-Produkt erlangen,<br/>
            b) bei Print@Home Zustellung/Download mit dem Tag des Vertragsabschlusses.<br/>
            c) Der Tag der Übernahme wird in den Fristenlauf nicht einbezogen. Samstage, Sonn- und Feiertage zählen 
            zur Berechnung der Frist mit. Zur Wahrung der Frist reicht die fristgerechte Absendung einer 
            entsprechenden eindeutigen Erklärung aus.<br/>
            d) Wenn Sie von einem Vertrag zurücktreten möchten, müssen Sie Gutschein2Go mittels einer eindeutigen 
            Erklärung (zB per Brief, oder Email) über Ihren Entschluss zum Vertragsrücktritt informieren. Sie können 
            dafür auch das im Anhang zu diesen AGB stehende Muster-Widerrufsformular verwenden, ohne dazu verpflichtet 
            zu sein. Ihre Rücktrittserklärung ist jedenfalls gegenüber Gutschein2Go an die (im Widerrufsformular 
            genannten) Kontaktmöglichkeiten abzugeben<br/>
            e) Für den Fall, dass Gutschein2Go Ihren Informationspflichten über Ihr Rücktrittsrecht gemäß den 
            Verbraucherschutzbestimmungen und/oder gemäß dem österreichischen Fern- und Auswärtsgeschäfte-Gesetz 
            („FAGG“) nicht nachgekommen ist, verlängert sich die vierzehntägige Frist zur Ausübung Ihres 
            Rücktrittsrechts auf zwölf Monate ab den oben genannten Zeitpunkten. Sollte Gutschein2Go ihren 
            Informationspflichten aber innerhalb dieses verlängerten Zeitraumes (verspätet) nachkommen, so beginnt die 
            vierzehntägige Rücktrittsfrist ab dem Zeitpunkt zu laufen, in dem Gutschein2Go Ihnen die erforderlichen 
            Informationen erteilt; in diesem Fall gilt die zwölfmonatige Frist also nicht mehr.<br/>
            f) Wenn Sie Ihr Rücktrittsrecht hinsichtlich physischer G2G-Produkte ausgeübt haben, müssen Sie die davon 
            betroffene(n) Ware(n) unverzüglich und jedenfalls binnen vierzehn Tagen (Absendung) an die im 
            Widerrufsformular angegebene Adresse zurücksenden, nachdem Sie Gutschein2Go über Ihren Rücktritt 
            informiert haben. Die Kosten und Gefahr für die Retournierung der Gutschein2Go-Produkte haben Sie zu 
            tragen.<br/>
            g) Alle Waren, die Sie auf diese Weise an Gutschein2Go retournieren, müssen sich grundsätzlich in 
            demselben Zustand und in derselben Verpackung befinden, in dem/der Sie diese erhalten haben. Sie können 
            die Warenverpackungen zu Ansichts- und Überprüfungszwecken öffnen, allerdings müssen alle retournierten 
            Waren unbeschädigt und ordnungsgemäß verpackt sein. Haben Sie eine Ware beschädigt und/oder nicht 
            ordnungsgemäß verpackt, so gebührt Gutschein2Go eine Entschädigung für die dadurch entstehende Minderung 
            des Warenverkehrswertes, sofern diese Wertminderung nicht auf einen Umgang mit der Ware und/oder der 
            Verpackung zurückzuführen ist, der zur Prüfung der Waren-Beschaffenheit und/oder der Waren-Eigenschaften 
            und/oder der angemessenen Waren-Funktionsweise notwendig ist.<br/>
            h) Gutschein2Go wird die von Ihnen geleisteten Zahlungen einschließlich der Versandkosten so rasch wie 
            möglich rückerstatten, und zwar spätestens innerhalb von vierzehn Tagen nach Einlangen der 
            Rücktrittsmitteilung bei Gutschein2Go. Wenn Sie nur einen Teil eines Einkaufes retournieren, gebührt Ihnen 
            auch nur eine entsprechende anteilige Kaufpreiserstattung. Wenn Sie aber mehrere Waren in Kombination zu 
            einem Pauschalpreis bestellt haben, können Sie Ihren Rücktritt nur hinsichtlich der gesamten 
            Warenkombination ausüben. Bei physischen Produkten behält sich Gutschein2Go vor, die Rückzahlung solange 
            zu verweigern, bis die Retoursendung eingelangt ist oder Sie Gutschein2Go einen Nachweis über die 
            Rücksendung der Ware(n) erbracht haben, wobei der frühere Zeitpunkt maßgeblich ist. Sie tragen die 
            unmittelbaren Kosten der Rücksendung der Waren. Sie müssen für einen etwaigen Wertverlust der Waren nur 
            aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit, Eigenschaften und 
            Funktionsweise der Waren nicht notwendigen Umgang mit ihnen zurückzuführen ist<br/>
            i) Sollten Sie aus welchem Grund auch immer kein Rücktrittsrecht (mehr) haben (zB nach Ablauf Ihrer 
            Rücktrittsfrist), müssen Sie die Kosten einer erneuten Zusendung an Sie tragen.<br/>Kein Rücktrittsrecht 
            besteht insbesondere bei etwaigen Gutschein2Go-Waren, die nach Kundenspezifikationen angefertigt werden 
            oder eindeutig auf die persönlichen Bedürfnisse zugeschnitten sind.<br/>&emsp;<br/>
            <strong>§ 14 Eigentumsvorbehalt</strong><br/>Alle Leistungen verbleiben bis zu ihrer vollständigen Bezahlung 
            im Eigentum von Gutschein2Go.<br/>Im Falle des auch nur teilweisen Zahlungsverzuges ist Gutschein2Go 
            berechtigt, seine Rechte aus dem Eigentumsvorbehalt geltend zu machen. Die Vorbehaltsware befindet sich zu 
            jedem Zeitpunkt im Eigentum von Gutschein2Go. Sie sind verpflichtet, falls sie die gelieferten Waren, 
            trotzdem diese noch nicht vollständig bezahlt wurden, an einen Dritten weiterverkaufen, den Dritten von 
            der erfolgten Abtretung des Kaufpreises schriftlich zu informieren und diese Information zu 
            dokumentieren.<br/><br/>
            <strong>§ 15 Gewährleistungsrechte</strong><br/>
            Sie besitzen gesetzliche Gewährleistungsrechte, die in den § 923 bis § 933b des österreichischen 
            Allgemeinen Bürgerlichen Gesetzbuches (ABGB) normiert sind.<br/>
            Die Produktabbildungen im G2G-Webshop müssen nicht immer mit dem Aussehen der tatsächlich gelieferten 
            Gutschein2Go-Produkte übereinstimmen. Vor allem bei Sortiments-Erneuerungen kann es zu Veränderungen 
            im Aussehen sowie in der Ausstattung der Ware kommen. Ihre Gewährleistungsrechte bestehen insofern 
            nicht, wenn die Gutschein2Go-Produkte sonst im Einklang mit seiner Beschreibung ist und derartige 
            geringfügige Veränderungen Ihnen daher zumutbar sind.<br/>Die Kosten für die Retouren von Waren, die 
            einen gewährleistungspflichtigen Mangel aufweisen, werden von Gutschein2Go getragen. Bitte führen Sie im 
            Begleitschreiben die Mängel konkret an. Mängel ohne Retournierung von Waren können von Gutschein2Go nicht 
            anerkannt werden. Retournierungen haben ausschließlich an die im Widerrufsformular angegebene Adresse zu 
            erfolgen. Bei berechtigter Mängelrüge erhalten Sie kostenfrei eine neuerliche Zustellung des bestellten 
            oder eines gleich- oder höherwertigen Gutschein2Go-Produkts.<br/><br/>
            <strong>§ 16 Schadenersatz</strong><br/>
            Entsteht Ihnen oder Gutschein2Go ein Schaden, weil die jeweils andere Vertragspartei eine Vertragspflicht 
            verletzt, hat die vertragsverletzende Partei unter den gesetzlichen Voraussetzungen einen Schadenersatz 
            zu leisten.<br/>Sämtliche Hinweise auf den Gutschein2Go-Produkt-Verpackungen und den 
            Gutschein2Go-Produkt-Beilagen sind zu beachten. Der zu ersätzende Betrag kann niemals größer sein als der 
            Warenwert der gekauften Gutscheine.<br/><br/>
            <strong>§ 17 Online-Streitbeilegung</strong><br/>
            Die EU-Kommission hat unter folgendem Link eine Online-Plattform zur Online-Streitbeilegung 
            bereitgestellt: http://ec.europa.eu/consumers/odr/ . Die österreichische Online-Plattform zur 
            Online-Streitbeilegung findet sich unter: https://www.verbraucherschlichtung.at/ . 
            Gutschein2Go ist aber nicht verpflichtet, an diesen teilzunehmen.<br/><br/>
            <strong>§ 18 Schlussbestimmungen</strong><br/>
            Es gelten ausschließlich gegenständliche AGB. Etwaige (Einkaufs)Bedingungen odgl von Ihnen gelten nicht, 
            solange sie von Gutschein2Go nicht schriftlich anerkannt wurden.<br/>Auf das Vertragsverhältnis zwischen 
            Ihnen und Gutschein2Go kommt österreichisches Recht unter Ausschluss des UN-Kaufrechts und der 
            Kollisionsnormen zur Anwendung, was aber für Sie günstigere Regelungen Ihres gewöhnlichen 
            Aufenthaltsstaats unberührt lässt.<br/>Sollten einzelne Bestimmungen dieser AGB unwirksam oder 
            undurchführbar sein oder unwirksam oder undurchführbar werden, bleibt die Wirksamkeit der übrigen 
            Bestimmungen davon unberührt. An die Stelle der unwirksamen oder undurchführbaren Bestimmung soll 
            diejenige wirksame und durchführbare Bestimmung treten, deren Wirkungen derjenigen wirtschaftlichen 
            Zielsetzung am nächsten kommt, welche die Vertragsparteien mit der unwirksamen bzw. undurchführbaren 
            Bestimmung verfolgt haben. Die vorstehenden Regelungen gelten entsprechend auch für den Fall, dass sich 
            die AGB als lückenhaft erweisen.<br/>&emsp;<br/>
            </p>
            <h2>========= Für Unternehmer =========</h2>
            <p>Allgemeine Geschäftsbedingungen (kurz „AGB)“ für den Online-Vertrieb von Gutschein2Go-Produkten an 
            Unternehmer über www.gutschein2go.at (kurz „G2G-Webshop“) . Für den Vertrieb obiger Produkte über 
            stationäre Vertriebspartner gelten diese AGB sinngemäß.<br/><br/>
            Für Verbraucher gelten die obenstehenden gesonderten Bedingungen. Auf diese wird mit „Verbraucher-AGB“ 
            verwiesen<br/>Die Werbeagentur Christian Aichner &amp; (im folgenden kurz „Gutschein2Go“), Emailwerkstraße 
            29, 9523 Villach-Landskron, ist Medieninhaber, Hersteller und Herausgeber der Website 
            unter <a href="http://www.gutschein2go.at">www.gutschein2go.at</a>.<br/><br/>
            <strong>§ 1 Grundsätzliches</strong><br/>
            Es gilt § 1 der Verbraucher-AGB auch für Unternehmer.<br/><br/>
            <strong>§ 2 Fragen zum G2G-Webshop</strong><br/>
            Sollten Sie irgendwelche Fragen oder Beschwerden im Zusammenhang mit dem G2G-Webshop oder zu 
            Gutschein2Go-Produkten (siehe § 6) haben, wie zB<br/>
            1. zu den Funktionalitäten des G2G-Webshops,<br/>
            2. zum Bestellvorgang im Allgemeinen,<br/>
            3. zu den angebotenen Gutschein2Go-Produkten, oder<br/>
            4. zur Rückgabe von gekauften Gutschein2Go-Produkten,<br/>
            kontaktieren Sie bitte den Kundendienst von Gutschein2Go unter <a href="mailto:info@gutschein2go.at">
            info@gutschein2go.at</a>.<br/><br/>
            <strong>§ 3 Wer kann im G2G-Webshop bestellen?</strong><br/>
            Wenn Sie eine Bestellung über den G2G-Webshop als Unternehmer abgeben, erklären Sie daher ausdrücklich, 
            dass Sie ein Unternehmer sind. Wenn Sie Verbraucher sind, gelten die oben stehenden Bedingungen für 
            Verbraucher. Wenn Sie die AGB nicht akzeptieren möchten, geben Sie bitte keine Bestellung über den 
            G2G-Webshop ab. Andernfalls behält sich Gutschein2Go vor, bereits aufgegebene Bestellungen abzulehnen bzw 
            solche Bestellungen zu stornieren. Jedenfalls haben Sie diesbezüglich Gutschein2Go schadlos zu halten.<br/>
            Sie erklären außerdem, den G2G-Webshop und die entsprechende Website nur im Rahmen der dafür vorgesehenen 
            Nutzung zu verwenden. Eine rechtsmissbräuchliche Verwendung des G2G-Webshops oder der Website, wie zB 
            unbefugte Manipulationen, Hacking- oder „Denial of Service“-Attacken, unrichtige Angabe(n) von Daten, 
            unbefugte Verwendung von Daten Dritter etc. machen Sie gegenüber Gutschein2Go schadenersatzpflichtig und 
            können auch darüber hinausgehende zivil- und/oder strafrechtliche Konsequenzen haben.<br/><br/>
            <strong>§ 4 Liefergebiet</strong><br/>
            Die Gutscheine können innerhalb Österreichs geliefert werden. Ein etwaiger Versand in andere Länder wird 
            nach Absprache individuell abgewickelt. Dieses Liefergebiet gilt hinsichtlich aller Gutschein2Go-Produkte 
            (siehe § 6)<br/><br/>
            <strong>§ 5 Akzeptierte Zahlungsmittel, Fälligkeit und Verzugszinsen</strong><br/>Es gilt § 5 der 
            Verbraucher-AGB auch für Unternehmer<br/><br/>
            <strong>§ 6 Bestellvorgang und Abschluss des Vertrages über Gutschein2Go-Produkte</strong><br/>
            Es gilt § 6 der Verbraucher-AGB auch für Unternehmer.<br/><br/>
            <strong>§ 7 Preise</strong><br/>Es gilt § 7 der Verbraucher-AGB auch für Unternehmer.<br/><br/>
            <strong>§ 8 Versand, Verpackungs- und Versandkosten, Rechnung und Versandüberprüfung</strong><br/>
            Es gilt § 8 der Verbraucher-AGB auch für Unternehmer, mit Abweichung des Folgenden: Nutzung und Gefahr 
            gehen auf Sie über, sobald das Gutschein2Go-Produkt von Gutschein2Go an den Transporteur übergeben 
            wird.<br/><br/>Zur Gewährleistung siehe § 15</p>
            <p><strong>§ 9 Besondere Bestimmungen betreffend die Gutscheine von Gutschein2Go</strong><br/>
            Es gilt § 9 der Verbraucher-AGB auch für Unternehmer.</p>
            <p><strong>§ 10 Persönliche Daten (Datenschutz)</strong><br/>Es gilt § 10 der Verbraucher-AGB auch für 
            Unternehmer.</p>
            <p><strong>§ 11 Urheber- und Kennzeichenrecht</strong><br/>Es gilt § 11 der Verbraucher-AGB auch für 
            Unternehmer.</p>
            <p><strong>§ 12 Haftung "Links"</strong><br/>Es gilt § 12 der Verbraucher-AGB auch für Unternehmer.</p>
            <p><strong>§ 13 Rücktritt</strong><br/>Als Unternehmer im Sinne der Verbraucherschutzbestimmungen haben Sie 
            kein Rücktrittsrecht.<br/><br/>
            <strong>§ 14 Eigentumsvorbehalt</strong><br/>Es gilt § 14 der Verbraucher-AGB auch für Unternehmer.<br/><br/>
            <strong>§ 15 Gewährleistungsrechte</strong><br/>Das gesetzliche Gewährleistungsrecht für 
            Gutschein2Go-Produkte ist gegenüber Unternehmern ausgeschlossen.<br/><br/>
            <strong>§ 16 Schadenersatz</strong><br/>
            Gutschein2Go haftet – außer für Personenschäden – Unternehmern ausschließlich bei grobem Verschulden<br/>
            Als Unternehmer erklären Sie, dass Sie die Gutschein2Go-Produkte überwiegend in Ihrem Unternehmen verwenden 
            und daher das Produkthaftungsrecht ausgeschlossen ist.<br/>Jedenfalls sind sämtliche Hinweise auf den 
            Gutschein2Go-Produkt-Verpackungen und den Gutschein2Go-Produkt-Beilagen zu beachten.<br/><br/>
            <strong>§ 17 Online-Streitbeilegung</strong><br/>Auf Unternehmer nicht anwendbar.<br/><br/>
            <strong>§ 18 Schlussbestimmungen</strong><br/>Es gelten ausschließlich gegenständliche AGB. Etwaige 
            (Einkaufs)Bedingungen odgl von Ihnen gelten nicht, solange sie von Gutschein2Go nicht schriftlich anerkannt 
            wurden.<br/><br/>Auf das Vertragsverhältnis zwischen Ihnen und Gutschein2Go kommt österreichisches Recht 
            unter Ausschluss des UN-Kaufrechts und der Kollisionsnormen zur Anwendung. Ausschließlicher Gerichtsstand 
            für Sie ist das sachlich zuständige Gericht für Wien 1, Österreich. Gutschein2Go kann bei vorgenanntem 
            Gericht, aber nach Wahl von Gutschein2Go auch bei Ihrem allgemeinen Gerichtsstand Ansprüche geltend 
            machen.<br/>Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchführbar sein oder unwirksam 
            oder undurchführbar werden, bleibt die Wirksamkeit der übrigen Bestimmungen davon unberührt. An die Stelle 
            der unwirksamen oder undurchführbaren Bestimmung soll diejenige wirksame und durchführbare Bestimmung 
            treten, deren Wirkungen derjenigen wirtschaftlichen Zielsetzung am nächsten kommt, welche die 
            Vertragsparteien mit der unwirksamen bzw. undurchführbaren Bestimmung verfolgt haben. Die vorstehenden 
            Regelungen gelten entsprechend auch für den Fall, dass sich die AGB als lückenhaft erweisen.</p>
            <p>--------------------------------------------------<br/>Muster-Widerrufsformular für Verbraucher</p>
            <p>Wenn Sie den Vertrag widerrufen wollen, füllen Sie bitte dieses Formular aus und senden Sie es zurück 
            an Werbeagentur Christian Aichner, Emailwerkstraße 29, 9523 Villach-Landskron</p>
            <p>E-Mail: info@gutschein2go.at</p>
            <p>Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der 
            folgenden Waren (*)/die Erbringung der folgenden Dienstleistung (*).<br/>Bestellt am (*)/erhalten am 
            (*): ____________________________<br/>Name des/der Verbraucher(s): _____________________________<br/>
            Anschrift des/der Verbraucher(s):___________________________<br/>Unterschrift des/der Verbraucher(s) 
            (nur bei Mitteilung auf Papier):_______________________________<br/>Datum:_________________</p>
            <p>(*) Unzutreffendes streichen.<br/>--------------------------------------------------</p>
            <p>&nbsp;</p>
            <p>Stand 29.03.2020</p>
          </div>
        </div>
        }
        {this.props.location.pathname === "/privacy" &&
        <div className="text-left mt-5">
          <h2>
          Datenschutzerklärung
          </h2>
          <p className="lead mb-0 font-weight-bold">Gutschein2Go, ein Service der Werbeagentur Christian Aichner</p>
          <p>
            Datenschutzbeauftragter:<br/> 
            <strong>Christian Aichner</strong>
            <br/>
            Tel: +43 681 205 027 54
            <br/>
            Emailwerkstraße 29
            <br/>
            9523 Villach-Landskron
            <br/>
            <MDBBtn
            color="orange"
            href="mailto:priavcy@gutschein2go.at"
            >
              <MDBIcon far icon="envelope" />
              Kontakt
            </MDBBtn>
          </p>
          <h1>Datenschutzerkl&auml;rung</h1>
          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3> <p>Die folgenden Hinweise geben einen einfachen &Uuml;berblick dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Ausf&uuml;hrliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgef&uuml;hrten Datenschutzerkl&auml;rung.</p>
          <h3>Datenerfassung auf dieser Website</h3> <p><strong>Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser Website?</strong></p> <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem Impressum dieser Website entnehmen.</p> <p><strong>Wie erfassen wir Ihre Daten?</strong></p> <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p> <p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p> <p><strong>Wof&uuml;r nutzen wir Ihre Daten?</strong></p> <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gew&auml;hrleisten. Andere Daten k&ouml;nnen zur Analyse Ihres Nutzerverhaltens verwendet werden.</p> <p><strong>Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</strong></p> <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein Recht, die Berichtigung oder L&ouml;schung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, k&ouml;nnen Sie diese Einwilligung jederzeit f&uuml;r die Zukunft widerrufen. Au&szlig;erdem haben Sie das Recht, unter bestimmten Umst&auml;nden die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde zu.</p> <p>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p>
          <h3>Analyse-Tools und Tools von Drittanbietern</h3> <p>Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen.</p> <p>Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerkl&auml;rung.</p>
          <h2>2. Hosting und Content Delivery Networks (CDN)</h2>
          <h3>Externes Hosting</h3> <p>Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten, die &uuml;ber eine Website generiert werden, handeln.</p> <p>Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserf&uuml;llung gegen&uuml;ber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).</p> <p>Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erf&uuml;llung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.</p>
          <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3>Datenschutz</h3> <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerkl&auml;rung.</p> <p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Die vorliegende Datenschutzerkl&auml;rung erl&auml;utert, welche Daten wir erheben und wof&uuml;r wir sie nutzen. Sie erl&auml;utert auch, wie und zu welchem Zweck das geschieht.</p> <p>Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht m&ouml;glich.</p>
          <h3>Hinweis zur verantwortlichen Stelle</h3> <p>Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser Website ist:</p> <p>Christian Aichner<br />
          Emailwerkstra&szlig;e 29</p>

          <p>Telefon: +4368120502754<br />
          E-Mail: contact@aichner-christian.com</p>
          <p>Verantwortliche Stelle ist die nat&uuml;rliche oder juristische Person, die allein oder gemeinsam mit anderen &uuml;ber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen, E-Mail-Adressen o. &Auml;.) entscheidet.</p>
          <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3> <p>Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.</p>
          <h3>Widerspruchsrecht gegen die Datenerhebung in besonderen F&auml;llen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3> <p>WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GR&Uuml;NDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH F&Uuml;R EIN AUF DIESE BESTIMMUNGEN GEST&Uuml;TZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKL&Auml;RUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR K&Ouml;NNEN ZWINGENDE SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN &Uuml;BERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUS&Uuml;BUNG ODER VERTEIDIGUNG VON RECHTSANSPR&Uuml;CHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</p> <p>WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F&Uuml;R DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).</p>
          <h3>Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde</h3> <p>Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh&ouml;rde, insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutma&szlig;lichen Versto&szlig;es zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>
          <h3>Recht auf Daten&uuml;bertragbarkeit</h3> <p>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erf&uuml;llung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem g&auml;ngigen, maschinenlesbaren Format aush&auml;ndigen zu lassen. Sofern Sie die direkte &Uuml;bertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>
          <h3>SSL- bzw. TLS-Verschl&uuml;sselung</h3> <p>Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschl&uuml;sselung. Eine verschl&uuml;sselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p> <p>Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist, k&ouml;nnen die Daten, die Sie an uns &uuml;bermitteln, nicht von Dritten mitgelesen werden.</p>
          <h3>Auskunft, L&ouml;schung und Berichtigung</h3> <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft &uuml;ber Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder L&ouml;schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten k&ouml;nnen Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p>
          <h3>Recht auf Einschr&auml;nkung der Verarbeitung</h3> <p>Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu k&ouml;nnen Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf Einschr&auml;nkung der Verarbeitung besteht in folgenden F&auml;llen:</p> <ul> <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, ben&ouml;tigen wir in der Regel Zeit, um dies zu &uuml;berpr&uuml;fen. F&uuml;r die Dauer der Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li> <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtm&auml;&szlig;ig geschah/geschieht, k&ouml;nnen Sie statt der L&ouml;schung die Einschr&auml;nkung der Datenverarbeitung verlangen.</li> <li>Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen, Sie sie jedoch zur Aus&uuml;bung, Verteidigung oder Geltendmachung von Rechtsanspr&uuml;chen ben&ouml;tigen, haben Sie das Recht, statt der L&ouml;schung die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li> <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abw&auml;gung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen &uuml;berwiegen, haben Sie das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li> </ul> <p>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschr&auml;nkt haben, d&uuml;rfen diese Daten &ndash; von ihrer Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung oder zur Geltendmachung, Aus&uuml;bung oder Verteidigung von Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen nat&uuml;rlichen oder juristischen Person oder aus Gr&uuml;nden eines wichtigen &ouml;ffentlichen Interesses der Europ&auml;ischen Union oder eines Mitgliedstaats verarbeitet werden.</p>
          <h3>Widerspruch gegen Werbe-E-Mails</h3> <p>Der Nutzung von im Rahmen der Impressumspflicht ver&ouml;ffentlichten Kontaktdaten zur &Uuml;bersendung von nicht ausdr&uuml;cklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdr&uuml;cklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.</p>
          <h2>4. Datenerfassung auf dieser Website</h2>
          <h3>Cookies</h3> <p>Unsere Internetseiten verwenden so genannte &bdquo;Cookies&ldquo;. Cookies sind kleine Textdateien und richten auf Ihrem Endger&auml;t keinen Schaden an. Sie werden entweder vor&uuml;bergehend f&uuml;r die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endger&auml;t gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gel&ouml;scht. Permanente Cookies bleiben auf Ihrem Endger&auml;t gespeichert, bis Sie diese selbst l&ouml;schen&nbsp;oder eine automatische L&ouml;schung durch Ihren Webbrowser erfolgt.</p> <p>Teilweise k&ouml;nnen auch Cookies von Drittunternehmen auf Ihrem Endger&auml;t gespeichert werden, wenn Sie unsere Seite betreten (Third-Party-Cookies). Diese erm&ouml;glichen uns oder Ihnen die Nutzung bestimmter Dienstleistungen des Drittunternehmens (z.B. Cookies zur Abwicklung von Zahlungsdienstleistungen).</p> <p>Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Webseitenfunktionen ohne diese nicht funktionieren w&uuml;rden (z.B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies dienen dazu, das Nutzerverhalten auszuwerten&nbsp;oder Werbung anzuzeigen.</p> <p>Cookies, die zur Durchf&uuml;hrung des elektronischen Kommunikationsvorgangs (notwendige Cookies) oder zur Bereitstellung bestimmter, von Ihnen erw&uuml;nschter Funktionen (funktionale Cookies, z. B. f&uuml;r die Warenkorbfunktion) oder zur Optimierung der Webseite (z.B. Cookies zur Messung des Webpublikums) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies abgefragt wurde, erfolgt die Speicherung der betreffenden Cookies ausschlie&szlig;lich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO); die Einwilligung ist jederzeit widerrufbar.</p> <p>Sie k&ouml;nnen Ihren Browser so einstellen, dass Sie &uuml;ber das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies f&uuml;r bestimmte F&auml;lle oder generell ausschlie&szlig;en sowie das automatische L&ouml;schen der Cookies beim Schlie&szlig;en des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalit&auml;t dieser Website eingeschr&auml;nkt sein.</p> <p>Soweit Cookies von Drittunternehmen oder zu Analysezwecken eingesetzt werden, werden wir Sie hier&uuml;ber im Rahmen dieser Datenschutzerkl&auml;rung gesondert informieren und ggf. eine Einwilligung abfragen.</p>
          <h3>Server-Log-Dateien</h3> <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns &uuml;bermittelt. Dies sind:</p> <ul> <li>Browsertyp und Browserversion</li> <li>verwendetes Betriebssystem</li> <li>Referrer URL</li> <li>Hostname des zugreifenden Rechners</li> <li>Uhrzeit der Serveranfrage</li> <li>IP-Adresse</li> </ul> <p>Eine Zusammenf&uuml;hrung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p> <p>Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website &ndash; hierzu m&uuml;ssen die Server-Log-Files erfasst werden.</p>
          <h3>Anfrage per E-Mail, Telefon oder Telefax</h3> <p>Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p> <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erf&uuml;llung eines Vertrags zusammenh&auml;ngt oder zur Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen &uuml;brigen F&auml;llen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.</p> <p>Die von Ihnen an uns per Kontaktanfragen &uuml;bersandten Daten verbleiben bei uns, bis Sie uns zur L&ouml;schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck f&uuml;r die Datenspeicherung entf&auml;llt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen &ndash; insbesondere gesetzliche Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.</p>
          <h2>5. Soziale Medien</h2>
          <h3>Facebook Plugins (Like &amp; Share-Button)</h3> <p>Auf dieser Website sind Plugins des sozialen Netzwerks Facebook integriert. Anbieter dieses Dienstes ist die Facebook Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland. Die erfassten Daten werden nach Aussage von Facebook jedoch auch in die USA und in andere Drittl&auml;nder &uuml;bertragen.</p> <p>Die Facebook Plugins erkennen Sie an dem Facebook-Logo oder dem &bdquo;Like-Button&ldquo; (&bdquo;Gef&auml;llt mir&ldquo;) auf dieser Website. Eine &Uuml;bersicht &uuml;ber die Facebook Plugins finden Sie hier: <a href="https://developers.facebook.com/docs/plugins/?locale=de_DE" target="_blank" rel="noopener noreferrer">https://developers.facebook.com/docs/plugins/?locale=de_DE</a>.</p> <p>Wenn Sie diese Website besuchen, wird &uuml;ber das Plugin eine direkte Verbindung zwischen Ihrem Browser und dem Facebook-Server hergestellt. Facebook erh&auml;lt dadurch die Information, dass Sie mit Ihrer IP-Adresse diese Website besucht haben. Wenn Sie den Facebook &bdquo;Like-Button&ldquo; anklicken w&auml;hrend Sie in Ihrem Facebook-Account eingeloggt sind, k&ouml;nnen Sie die Inhalte dieser Website auf Ihrem Facebook-Profil verlinken. Dadurch kann Facebook den Besuch dieser Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der &uuml;bermittelten Daten sowie deren Nutzung durch Facebook erhalten. Weitere Informationen hierzu finden Sie in der Datenschutzerkl&auml;rung von Facebook unter: <a href="https://de-de.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer">https://de-de.facebook.com/privacy/explanation</a>.</p> <p>Wenn Sie nicht w&uuml;nschen, dass Facebook den Besuch dieser Website Ihrem Facebook-Nutzerkonto zuordnen kann, loggen Sie sich bitte aus Ihrem Facebook-Benutzerkonto aus.</p> <p>Die Verwendung der Facebook Plugins erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an einer m&ouml;glichst umfangreichen Sichtbarkeit in den Sozialen Medien. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p>
          <h2>6. Newsletter</h2>
          <h3>Newsletterdaten</h3> <p>Wenn Sie den auf der Website angebotenen Newsletter beziehen m&ouml;chten, ben&ouml;tigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die &Uuml;berpr&uuml;fung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Weitere Daten werden nicht bzw. nur auf freiwilliger Basis erhoben. Diese Daten verwenden wir ausschlie&szlig;lich f&uuml;r den Versand der angeforderten Informationen und geben diese nicht an Dritte weiter.</p> <p>Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen Daten erfolgt ausschlie&szlig;lich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die erteilte Einwilligung zur Speicherung der Daten, der E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters k&ouml;nnen Sie jederzeit widerrufen, etwa &uuml;ber den &bdquo;Austragen&ldquo;-Link im Newsletter. Die Rechtm&auml;&szlig;igkeit der bereits erfolgten Datenverarbeitungsvorg&auml;nge bleibt vom Widerruf unber&uuml;hrt.</p> <p>Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten Daten werden von uns bis zu Ihrer Austragung aus dem Newsletter bei uns bzw. dem Newsletterdiensteanbieter gespeichert und nach der Abbestellung des Newsletters aus der Newsletterverteilerliste gel&ouml;scht. Daten, die zu anderen Zwecken bei uns gespeichert wurden bleiben hiervon unber&uuml;hrt.</p> <p>Nach Ihrer Austragung aus der Newsletterverteilerliste wird Ihre E-Mail-Adresse bei uns bzw. dem Newsletterdiensteanbieter ggf. in einer Blacklist gespeichert, um k&uuml;nftige Mailings zu verhindern. Die Daten aus der Blacklist werden nur f&uuml;r diesen Zweck verwendet und nicht mit anderen Daten zusammengef&uuml;hrt. Dies dient sowohl Ihrem Interesse als auch unserem Interesse an der Einhaltung der gesetzlichen Vorgaben beim Versand von Newslettern (berechtigtes Interesse im Sinne des Art. 6 Abs. 1 lit. f DSGVO). Die Speicherung in der Blacklist ist zeitlich nicht befristet. <strong>Sie k&ouml;nnen der Speicherung widersprechen, sofern Ihre Interessen unser berechtigtes Interesse &uuml;berwiegen.</strong></p>
          <h2>7. Plugins und Tools</h2>
          <h3>Google reCAPTCHA</h3> <p>Wir nutzen &bdquo;Google reCAPTCHA&ldquo; (im Folgenden &bdquo;reCAPTCHA&ldquo;) auf dieser Website. Anbieter ist die Google Ireland Limited (&bdquo;Google&ldquo;), Gordon House, Barrow Street, Dublin 4, Irland.</p> <p>Mit reCAPTCHA soll &uuml;berpr&uuml;ft werden, ob die Dateneingabe auf dieser Website (z.&nbsp;B. in einem Kontaktformular) durch einen Menschen oder durch ein automatisiertes Programm erfolgt. Hierzu analysiert reCAPTCHA das Verhalten des Websitebesuchers anhand verschiedener Merkmale. Diese Analyse beginnt automatisch, sobald der Websitebesucher die Website betritt. Zur Analyse wertet reCAPTCHA verschiedene Informationen aus (z.&nbsp;B. IP-Adresse, Verweildauer des Websitebesuchers auf der Website oder vom Nutzer get&auml;tigte Mausbewegungen). Die bei der Analyse erfassten Daten werden an Google weitergeleitet.</p> <p>Die reCAPTCHA-Analysen laufen vollst&auml;ndig im Hintergrund. Websitebesucher werden nicht darauf hingewiesen, dass eine Analyse stattfindet.</p> <p>Die Speicherung und Analyse der Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse daran, seine Webangebote vor missbr&auml;uchlicher automatisierter Aussp&auml;hung und vor SPAM zu sch&uuml;tzen. Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</p> <p>Weitere Informationen zu Google reCAPTCHA entnehmen Sie den Google-Datenschutzbestimmungen und den Google Nutzungsbedingungen unter folgenden Links: <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=de</a> und <a href="https://policies.google.com/terms?hl=de" target="_blank" rel="noopener noreferrer">https://policies.google.com/terms?hl=de</a>.</p>
          <p>Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a></p>
        </div>
        }
      </MDBContainer>
    );
  }
}

export default MessagePage;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
