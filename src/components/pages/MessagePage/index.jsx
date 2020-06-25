//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBContainer, MDBBtn, MDBIcon } from "mdbreact";

//> CSS
import "./messagepage.scss";
//#endregion

//#region > Components
class MessagePage extends React.Component {
  render() {
    return (
      <MDBContainer id="message" className="py-5 my-5 text-center">
        {this.props.location.pathname === "/thankyou" && (
          <>
            <h2>
              Thank you for considering to donate
              <MDBIcon icon="heart" className="pink-text ml-2" />
            </h2>
            <p className="lead mt-3 mb-0">
              We are a <strong>non-profit</strong>, <strong>open source</strong>{" "}
              Social Network.
            </p>
            <p>We therefore require donations to stay up-and-running.</p>
            <p className="mb-0">
              If you change your mind later, you can always
            </p>
            <MDBBtn
              color="green"
              size="md"
              onClick={() => this.setState({ modalDonate: true })}
            >
              Donate
            </MDBBtn>
          </>
        )}
        {this.props.location.pathname === "/about" && (
          <div className="text-left mt-5">
            <h2>Impressum</h2>
            <p className="lead mb-0 font-weight-bold">
              Gutschein2Go, ein Service der Werbeagentur Christian Aichner
            </p>
            <p>
              <strong>Werbeagentur Christian Aichner</strong>
              <br />
              Tel: +43 681 205 027 54
              <br />
              Emailwerkstraße 29
              <br />
              9523 Villach-Landskron
              <br />
              <MDBBtn color="blue" href="mailto:info@gutschein2go.at">
                <MDBIcon far icon="envelope" />
                Kontakt
              </MDBBtn>
            </p>
            <p className="lead mb-2">Haftungsausschluss</p>
            <p>
              Dieser Haftungsausschluss ist als Teil des Internetangebotes zu
              betrachten, von dem aus auf diese Webseite verwiesen wurde. Sofern
              Teile oder einzelne Formulierungen dieses Textes der geltenden
              Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen
              sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt
              und ihrer Gültigkeit davon unberührt.
            </p>
            <p className="lead mb-2">Haftung für Inhalte dieser Webseite</p>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
              sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen
              Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen
              oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung
              der Nutzung von Informationen nach den allgemeinen Gesetzen
              bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
              erst ab dem Zeitpunkt der Kenntnis einer konkreten
              Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
            <p className="lead mb-2">Haftung für Links auf Webseiten Dritter</p>
            <p>
              Unser Angebot enthält Links zu externen Websites. Auf den Inhalt
              dieser externen Webseiten haben wir keinerlei Einfluss. Deshalb
              können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten
              Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
              Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
              Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
              inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
              konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
              Bekanntwerden von Rechtsverletzungen werden wir derartige Links
              umgehend entfernen.
            </p>
            <p className="lead mb-2">Urheberrecht</p>
            <p>
              Die Betreiber dieser Webseite sind bemüht, stets die Urheberrechte
              anderer zu beachten bzw. auf selbst erstellte sowie lizenzfreie
              Werke zurückzugreifen. Die durch die Seitenbetreiber erstellten
              Inhalte und Werke auf dieser Webseite unterliegen dem
              Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet.
            </p>
          </div>
        )}
        {this.props.location.pathname === "/agb" && (
          <div className="text-center mt-5">
            <MDBIcon icon="handshake" size="3x" className="text-success mb-3" />
            <h2>Allgemeine Geschäftsbedingungen für Partner</h2>
            <p className="lead">
              für den Online-Marktplatz „www.gutschein2go.at“ [Partner-AGB]
            </p>
            <div className="text-left">
              <p>
                <strong>Werbeagentur Christian Aichner</strong>
                <br />
                Emailwerkstraße 29
                <br />
                9523 Villach-Landskron
                <br />
                info@gutschein2go.at
                <br />
                www.gutschein2go.at
                <br />
                +43 681 205 027 54
                <br />
                GISA: 31375511
                <br />
                (im Folgenden kurz „gutschein2go“)
              </p>
              <p>
                gutschein2go stellt unter der Internetseite www.gutschein2go.at
                sowie aller zu dieser Domain gehörenden Subdomains und Webseiten
                (im Folgenden kurz „www.gutschein2go.at“) einen Internetdienst
                über einen Online-Marktplatz für den Verkauf von Gutscheine für
                Waren und Dienstleistungen durch Dritte („Verkäufer“) zur
                Verfügung.
              </p>
              <p className="lead font-weight-bold">1. Vertragsgrundlagen</p>
              <p>
                1.1 Die Vertragsbeziehung zwischen Verkäufern und gutschein2go
                werden durch einen Partnervertrag geregelt, dem die vorliegenden
                Allgemeinen Geschäftsbedingungen für Partner für den
                Online-Marktplatz „www.gutschein2go.at“ (im Folgenenden kurz
                „Partner-AGB“) zugrunde liegen. Die bei Abschluss des
                Partnervertrages in Geltung stehenden ANB bilden einen
                integrierenden Bestandteil des Partnervertrages.
              </p>
              <p>
                1.2 Allfällig bestehende allgemeine Geschäftsbedingungen des
                Verkäufers werden nicht Vertragsbestandteil.
              </p>
              <p className="lead font-weight-bold">2. Gutscheinerstellung</p>
              <p>
                2.1 gutschein2go stellt einen Online-Marktplatz zur Verfügung,
                auf dem der Verkäufer in eigenem Namen und auf eigene Rechnung
                Gutscheine an Nutzer verkaufen kann, wobei gutschein2go jedoch
                gemäß den ANB keine bestimmte Verfügbarkeit des
                Online-Marktplatz zusagt und jederzeit berechtigt ist, seine
                angebotenen Internetdienste endgültig einzustellen.
              </p>
              <p>
                2.2 Die Erstellung und Ausgestaltung der Gutscheine obliegt dem
                Verkäufer. gutschein2go behält sich jedoch vor, zu Zwecken eines
                einheitlichen Erscheinungsbildes von über www.gutschein2go.at
                verkaufen Gutscheinen bzw zu Marketingzwecken detaillierte
                Vorgabe zur Größe und zum Erscheinungsbild der angebotenen
                Gutscheine zu erlassen. Insbesondere ist gutschein2go
                berechtigt, die Rückseite des Gutscheins nach eigenem Gutdünken
                zu gestalten bzw zu bedrucken.
              </p>
              <p>
                2.3 Im Wege des von gutschein2go zur Verfügung gestellten
                Internetdienstes wird der Gutschein automationsunterstützt
                generiert und an den Nutzer entweder per Post versendet oder als
                download-link zu Verfügung gestellt. Hierbei wird mittels des
                zur Verfügung gestellten Internetdienstes auf dem Gutschein des
                Verkäufers ein automationsunterstützt generierter 10-stelligen
                Zahlencode aufgedruckt.
              </p>
              <p>
                2.4 Dem Verkäufer obliegt es, bei der Einlösung von Gutscheinen
                eine Verifizierung dieser anhand eines Abgleichs des Zahlencodes
                auf dem ihm zur Einlösung von einem Nutzer oder Dritten
                vorgelegten Gutscheins mit jenen Zahlencodes, die im von
                gutschein2go übermittelt wurden, vorzunehmen. gutschein2go
                übernimmt keine Zusage einer bestimmten Fälschungssicherheit der
                ausgestellten Gutscheine und übernimmt auch keine Haftung bei
                missbräuchlicher Einlösung von Gutscheinen aus welchen Gründen
                auch immer: sei es weil der Verkäufer keine Abgleichung des
                Zahlencodes vorgenommen hat; sei es, weil von gutschein2go bzw
                der eingesetzten Software ein Zahlencode zwei- oder mehrfach
                vergeben wurde oder sei es durch ein malversatives Verhalten
                eines Dritten bzw des Nutzers.
              </p>
              <p>
                2.5 Eine von gutschein2go auf Basis eines QR-Codes für Nutzer
                zur Verfügung gestellte Verifizierungsmöglichkeit für
                Gutscheine, mit der die Gültigkeit eines Gutscheins überprüft
                werden kann, ist gegenüber Nutzern und Verkäufern ausdrücklich
                unverbindlich. Die Gültigkeit eines Gutscheins wird
                grundsätzlich vom jeweiligen Verkäufer im Zeitpunkt der
                beabsichtigten Einlösung vor Ort geprüft und obliegt im Fall
                eines Verdachtes auf Missbrauch bzw malversativen Verhaltens der
                gerichtlichen Beurteilung.
              </p>
              <p>
                2.6 So der Verkäufer die gesetzliche Gültigkeitsdauer der
                verkauften Gutscheine einschränken will, darf er dies nur im
                rechtlich zulässigem Ausmaß tun.
              </p>
              <p className="lead font-weight-bold">
                3. Zahlungsdiensteanbieter und Entgelt
              </p>
              <p>
                3.1 Im Wege des von gutschein2go zur Verfügung gestellten
                Internetdienstes wird über einen Zahlungsdiensteanbieters vom
                Nutzer der Kaufpreis zzgl. allfälliger Versandkosten eingehoben
                und an gutschein2go weitergeleitet.
              </p>
              <p>
                3.2 gutschein2go verpflichtet sich, nach Zahlungseingang und
                nach Ablauf der Widerrufsfirst nach dem FAGG [allenfalls weitere
                Fristen] die für einen Verkäufer in Empfang genommenen Zahlungen
                unter Abzug einer Provision in Höhe eines im Partnervertrags
                ausgewiesenen Prozentsatzes vom Nettoverkaufspreis des
                betreffenden Gutscheines an den Verkäufer zum Ende des
                Kalendermonates auf ein von diesem bekanntgegebenes
                österreichisches Bankkonto weiterzuleiten.
              </p>
              <p>
                3.3 Mit Ausnahme, der im vorigen Punkt genannten Provision hat
                der Verkäufer für die Nutzung des von gutschein2go zur Verfügung
                gestellten Internetdienstes kein Entgelt zu entrichten.
              </p>
              <p>
                3.4 Der Verkäufer verpflichtet sich, hinsichtlich der von ihm
                über www.gutschein2go.at verkauften Gutscheinen zur direkten
                Rechnungslegung gegenüber den Nutzer.
              </p>
              <p className="lead font-weight-bold">4. Vertragsdauer</p>
              <p>
                4.1 Der Partnervertrag ist auf unbestimmte Zeit abgeschlossen.
                gutschein2go und der Verkäufer sind berechtigt, den
                Partnervertrag unter Einhaltung einer Frist von drei Monaten
                jeweils zum Monatsende zu kündigen.
              </p>
              <p>
                4.2 Davon unberührt bleibt die Möglichkeit von gutschein2go und
                dem Verkäufer zur Kündigung aus wichtigem Grund.
              </p>
              <p>
                4.3 Wenn gutschein2go die vertragsgegenständlichen angebotenen
                Internetdienste endgültig einstellt, endet auch der
                Partnervertrag automatisch.
              </p>
              <p className="lead font-weight-bold">5. Haftung</p>
              <p>
                5.1 gutschein2go übernimmt keine Haftung für die Zustellung der
                Gutscheine an die Nutzer in elektronischer Form oder in
                Papierform.
              </p>
              <p>
                5.2 gutschein2go haftet – ausgenommen bei Personenschäden –
                lediglich bei Vorsatz und grober Fahrlässigkeit. gutschein2go
                haftet – ausgenommen bei Personenschäden – ferner nicht für
                atypische Schäden, mittelbare Schäden, entgangenen Gewinn,
                Folge- und Vermögensschäden oder Schäden aufgrund höherer Gewalt
                (z.B. Streik, Krieg, Erdbeben, Umweltkatastrophen, Epidemien).
                In jedem Fall ist die Haftung von gutschein2go begrenzt auf den
                typischerweise entstehenden, vorhersehbaren Schaden.
                Haftungsansprüche verjähren nach sechs Monaten ab Kenntnis des
                Geschädigten vom Schaden.
              </p>
              <p>
                5.3 Der Verkäufer hält gutschein2go schad- und klaglos, wenn
                gutschein2go von einem Nutzer oder Dritten wegen einer
                Verletzung einer dem Verkäufer obliegenden Verpflichtungen aus
                oder im Zusammenhang mit einem vom Verkäufer auf
                www.gutschein2go.at angebotenen Gutschein oder wegen einer
                Verletzung einer dem Verkäufer obliegenden Vertragspflicht
                gegenüber gutschein2go oder wegen eines sonstigen rechtswidrigen
                Verhaltens des Verkäufers einem Nutzer oder Dritten gegenüber in
                Anspruch genommen wird.
              </p>
              <p className="lead font-weight-bold">6. Schlussbestimmungen</p>
              <p>
                6.1 gutschein2go ist berechtigt, sämtliche Rechte und dem Nutzer
                und Verkäufer gegenüber bestehende Pflichten im Zusammenhang mit
                dem Betrieb des Online-Marktplatzes ganz oder teilweise auf eine
                neu zu gründende Kapitalgesellschaft, an der gutschein2go als
                Gesellschafter beteiligt sein wird, zu übertragen.
              </p>
              <p>
                6.2 Sollte eine oder mehrere der vorangegangenen Bestimmungen
                unwirksam oder undurchführbar sein, bleibt die Wirksamkeit der
                übrigen Bestimmungen davon unberührt. An die Stelle der
                rechtsunwirksamen oder undurchführbaren Bestimmung tritt die
                gesetzliche Regelung.
              </p>
              <p>
                6.3 Auf alle Rechtsverhältnisse zwischen gutschein2go einerseits
                und Nutzern und Verkäufern andererseits findet das Recht der
                Republik Österreich unter Ausschluss aller nationaler und
                internationaler Verweisungsnormen sowie des
                UN-Kaufrechtsübereinkommens Anwendung.
              </p>
              <p>
                6.4 Als ausschließlicher Gerichtsstand wird das sachlich
                zuständige Gericht in 9500 Villach vereinbart.
              </p>
            </div>
          </div>
        )}
        {this.props.location.pathname === "/anb" && (
          <div className="text-center mt-5">
            <MDBIcon
              icon="balance-scale"
              size="3x"
              className="text-success mb-3"
            />
            <h2>Allgemeine Nutzungsbedingungen</h2>
            <p className="lead">
              für den Online-Marktplatz „www.gutschein2go.at“ [ANB]
            </p>
            <div className="text-left">
              <p>
                <strong>Werbeagentur Christian Aichner</strong>
                <br />
                Emailwerkstraße 29
                <br />
                9523 Villach-Landskron
                <br />
                info@gutschein2go.at
                <br />
                www.gutschein2go.at
                <br />
                +43 681 205 027 54
                <br />
                GISA: 31375511
                <br />
                (im Folgenden kurz „gutschein2go“)
              </p>
              <p>
                gutschein2go versteht sich als Internetdienst für Unternehmen,
                um diesen die Möglichkeit zu bieten, auf einem Online-Marktplatz
                Gutscheine für Waren und Dienstleistungen verkaufen zu können
                (im Folgenden kurz „Verkäufer“) und als Internetdienst für
                Käufer, um diesen die Möglichkeit zu bieten, auf einem
                Online-Marktplatz von Verkäufern angebotene Gutscheine für Waren
                und Dienstleistungen von diesen erwerben zu können (im Folgenden
                kurz „Nutzer“).{" "}
              </p>
              <p className="lead font-weight-bold">1. Geltungsbereich</p>
              <p>
                1.1 Diese Allgemeinen Nutzungsbedingungen für den
                Online-Marktplatz „www.gutschein2go.at“ (im Folgenden kurz
                „ANB“) gelten für sämtliche von gutschein2go auf der
                Internetseite www.gutschein2go.at sowie aller zu dieser Domain
                gehörenden Subdomains und Webseiten (im Folgenden kurz
                „www.gutschein2go.at“) zur Verfügung gestellten Internetdienste.
                Sie regeln daher das Verhältnis zwischen Nutzern und Verkäufern
                einerseits und gutschein2go andererseits (im Folgenden kurz
                „Nutzungsvertrag“). Die Inanspruchnahme der von gutschein2go auf
                www.gutschein2go.at zur Verfügung gestellten Internetdienste
                unterliegt ausschließlich diesen ANB. Von diesen ANB abweichende
                oder ergänzende Bestimmungen – insbesondere AGB von Nutzern oder
                Verkäufern – gelten nur bei ausdrücklicher schriftlicher
                Vereinbarung und nur jeweils für den Einzelfall.
              </p>
              <p>
                1.2 Zudem treten zwischen Verkäufern und gutschein2go die
                Bestimmungen der Allgemeinen Geschäftsbedingungen für Partner
                („Partner-AGB“) hinzu.
              </p>
              <p className="lead font-weight-bold">
                2. Internetdienst Online-Marktplatz
              </p>
              <p>
                2.1 gutschein2go stellt unter der Domain „gutschein2go.at“ einen
                Online-Marktplatz zur Verfügung, auf welchem
              </p>
              <p>
                2.1.1 Verkäufer die Möglichkeit haben, Gutscheine im eigenen
                Namen und auf eigene Rechnung im Wege einer Online-Präsenz zum
                Kauf anzubieten und den Kauf bzw Verkauf dieser über den von
                gutschein2go bereitgestellten Internetdienst abzuwickeln.
              </p>
              <p>
                2.1.2 Nutzer die Möglichkeit haben, von Verkäufern angebotene
                Gutscheine von diesen zu erwerben und den Kauf über den von
                gutschein2go bereitgestellten Internetdienst abzuwickeln.
              </p>
              <p>
                2.2 gutschein2go stellt lediglich einen Online-Marktplatz für
                Verkäufer und Nutzer zur Verfügung und wird weder selbst als
                Verkäufer noch als Makler tätig. gutschein2go übernimmt
                lediglich die Zurverfügungstellung des Internetdienstes für den
                Vertragsabschluss und nach erfolgtem Vertragsabschluss die
                Zusendung einer Bestätigung über den Vertragsabschlusses sowie
                die Zusendung des Gutscheins des Verkäufers in elektronischer
                Form (Download-Link) oder in Papierform im Namen und im Auftrag
                des Verkäufers. Zudem nimmt gutschein2go als Bote
                Widerrufserklärungen von Nutzern nach dem Fern- und
                Auswärtsgeschäfte-Gesetz (FAGG) an Verkäufer entgegen und leitet
                dies an die Verkäufer weiter.
              </p>
              <p>
                2.3 Ein Kaufvertrag über die auf www.gutschein2go.at angebotenen
                Gutscheine kommt ausschließlich zwischen dem jeweiligen
                Verkäufer und dem jeweiligen Nutzer als Käufer zustande. Es
                obliegt sohin ausschließlich dem Verkäufer, die Leistungen, die
                mit dem von ihm zum Kauf angebotenen Gutschein bezogen werden
                können, ausreichend bestimmt, vollständig und wahrheitsgemäß zu
                bezeichnen.
              </p>
              <p>
                2.4 gutschein2go nimmt keinerlei Einfluss auf die von Verkäufern
                angebotenen Gutscheine und angeführten Leistungsbeschreibungen.
              </p>
              <p>
                2.5 gutschein2go überprüft nicht, ob die von Verkäufern
                angebotenen Gutscheine und angeführten Leistungsbeschreibungen
                rechtmäßig, richtig und vollständig sind, weshalb gutschein2go
                auch keine Haftung hierfür übernimmt.
              </p>
              <p>
                2.6 So gutschein2go Kenntnis erlangt, dass von Verkäufern
                angebotenen Gutscheine oder angeführten Leistungsbeschreibungen
                nicht rechtmäßig, nicht richtig oder nicht vollständig sind,
                wird gutschein2go – nach Wahl von gutschein2go – entweder den
                Verkäufer zur unverzüglichen Berichtigung bzw Vervollständigung
                auffordern oder die entsprechenden Inhalte vom Online-Marktplatz
                entfernen.
              </p>
              <p>
                2.7 gutschein2go behält sich vor, angebotene Gutscheine vom
                Online-Marktplatz zu entfernen, wenn diese rechtswidrig sind
                und/oder Rechte Dritter, insbesondere Marken-, Wettbewerbs-,
                Urheber- oder Persönlichkeitsrechte verletzen. Ebenso behält
                sich gutschein2go die Entfernung von Gutscheinen vom
                Online-Marktplatz vor, wenn diese sich auf sittenwidrige
                Leistungen beziehen.
              </p>
              <p>
                2.8 gutschein2go sagt weder Verkäufern noch Nutzern eine
                bestimmte Verfügbarkeit des Online-Marktplatz oder eine
                bestimmte Kompatibilität des Internetdienstes mit von Verkäufern
                oder Nutzern verwendeter Hard- oder Software zu.
              </p>
              <p>
                2.9 gutschein2go wird die Verfügbarkeit des Online-Marktplatz
                zeitweilig einschränken, wenn dies im Hinblick auf
                Kapazitätsgrenzen, die Sicherheit oder Integrität von Servern,
                die Einhaltung gesetzlicher Bestimmungen oder zur Durchführung
                technischer Maßnahmen (z.B. Wartungsarbeiten) erforderlich ist.
              </p>
              <p>
                2.10 Darüber hinaus ist gutschein2go berechtigt, seine
                angebotenen Internetdienste jederzeit endgültig einzustellen,
                womit der Nutzungsvertrag automatisch endet.
              </p>
              <p className="lead font-weight-bold">
                3. Pflichten der Verkäufer
              </p>
              <p>
                3.1 Die Verkäufer verpflichten sich zur vollständigen,
                wahrheitsgemäßen und nicht irreführenden Bezeichnung der Waren
                und Dienstleistungen, die mit den von ihnen auf
                www.gutschein2go.at angebotenen Gutscheinen bezogen werden
                können.
              </p>
              <p>
                3.2 Die Verkäufer verpflichten sich, die gesetzlichen
                Produktkennzeichnungspflichten und die gesetzlichen
                Informations- und Bestätigungspflichten, insbesondere nach dem
                Fern- und Auswärtsgeschäfte-Gesetz (FAGG) einzuhalten. Davon
                abweichend übernimmt gutschein2go im Auftrag und im Namen der
                Verkäufer die Versendung der Bestätigung über den
                Vertragsabschluss gemäß § 10 Abs 2 E-Commerce-Gesetz (ECG) und
                nimmt Widerrufserklärungen nach dem FAGG von Nutzern an
                Verkäufer als Bote entgegen und leitet dies an die Verkäufer
                weiter.
              </p>
              <p>
                3.3 Die Verkäufer verpflichten sich, keine Inhalte auf
                www.gutschein2go.at zu stellen, die sitten- oder rechtswidrig
                sind oder Rechte Dritter, insbesondere Marken-, Wettbewerbs-,
                Urheber- oder Persönlichkeitsrechte verletzen.
              </p>
              <p className="lead font-weight-bold">
                4. Vertragsabschluss mit Verkäufer und Widerrufsrecht
              </p>
              <p>
                4.1 Die von den Verkäufern auf www.gutschein2go.at angebotenen
                Gutscheine stellen eine Einladung zur Anbotslegung durch den
                Nutzer dar. Durch Anklicken der Schaltfläche „zahlungspflichtig
                bestellen“ stellt der Nutzer ein verbindliches Angebot auf
                Abschluss eines Kaufvertrags über den betreffenden Gutschein auf
                Basis der vom Verkäufer angegebenen Leistungsbeschreibung. Die
                Annahme des Angebots durch den Verkäufer (und damit der
                Vertragsabschluss) erfolgt durch eine Bestätigung per E-Mail,
                die von gutschein2go im Namen und im Auftrag des Verkäufers an
                den Nutzer gesendet wird.
              </p>
              <p>
                4.2 Ist der Nutzer Verbraucher im Sinne des
                Konsumentenschutzgesetzes kann er den mit dem Verkäufer
                abgeschlossenen Kaufvertrag innerhalb von 14 Tage ab dem
                Vertragsabschluss ohne Angaben von Gründen schriftlich
                widerrufen.
              </p>
              <p>
                4.3 Zur Ausübung des Widerrufsrechts genügt eine einfache
                Mitteilung aus der hervorgeht, dass der Nutzer den Kaufvertrag
                widerrufen möchte, wobei dies mit einem mit der Post versandten
                Brief, einem Telefax oder einer E-Mail an die jeweilige am
                Gutschein angegebene Adresse des Verkäufers oder auch an
                gutschein2go erfolgen kann, wobei gutschein2go die
                Widerrufserklärungen lediglich als Bote entgegennimmt und an den
                Verkäufer weiter leitet. Nutzer können hierfür auch das
                Musterformular im Anhang zu diesen ANB verwenden.
              </p>
              <p>
                4.4 Die Auslieferung des Gutscheines an den Nutzer erfolgt je
                nachdem, welche Auslieferungsvariante der Nutzer im
                Bestellprozess gewählt hat, entweder durch Versendung des
                Gutscheines in Papierform an die von Nutzer angegebene
                Postanschrift oder durch Bereitstellung eines Links für den
                Download des Gutscheines durch den Nutzer selbst.
              </p>
              <p>
                4.5 Gutscheine können grundsätzlich 30 Jahre lang nach
                Vertragsabschluss ausschließlich beim Verkäufer eingelöst
                werden, außer der Verkäufer schränkt aus sachlich
                gerechtfertigten Gründen die Gültigkeitsdauer eines Gutscheines
                ein.
              </p>
              <p className="lead font-weight-bold">
                5. Haftung von gutschein2go
              </p>
              <p>5.1 Vertragsverhältnis zwischen Nutzern und Kunden</p>
              <p>
                Da gutschein2go lediglich einen Online-Marktplatz zur Verfügung
                stellt, selbst aber keine Gutscheine verkauft und auch keinen
                Einfluss auf die von den Verkäufern angebotenen Gutscheinen
                nimmt, haftet gutschein2go nicht wegen Verletzung von
                vertraglichen oder vorvertraglichen Verpflichtungen des
                Verkäufers. gutschein2go haftet daher insbesondere nicht
              </p>
              <p>
                5.1.1 für die Rechtmäßigkeit, die Richtigkeit, oder die
                Vollständigkeit der von Verkäufern verfassten Inhalte bzw der
                von diesen angebotenen Gutscheine und angeführten
                Leistungsbeschreibungen;
              </p>
              <p>
                5.1.2 für das Zustandekommen oder Nichtzustandekommen eines
                Kauf-, Dienst-, oder werksvertrages im Zusammenhang mit einem
                von einem Verkäufer auf www.gutschein2go.at angebotenen
                Gutschein;
              </p>
              <p>
                5.1.3 dafür, dass der Verkäufer die Leistungen zu den
                vereinbarten Bedingungen erbringt; gutschein2go haftet sohin
                nicht für die Erfüllung der vom Verkäufer geschuldeten
                Leistungen bzw die Einlösung des gekauften Gutscheines noch für
                Ansprüche wegen Nicht- oder Schlechterfüllung gegen einen
                Verkäufer (dies auch nicht für den Fall, dass es infolge von
                Tod, Liquidation oder der Eröffnung eines Insolvenzverfahrens
                oder Nichteröffnung eines solchen mangels Masse nicht mehr zu
                einer Einlösung des Gutscheins durch den Verkäufer kommen kann);
              </p>
              <p>
                5.1.4 für Ansprüche wegen Produkthaftung gegen einen Verkäufer
                oder Dritten.
              </p>
              <p>5.2 Vertragsverhältnis Nutzungsvertrag</p>
              <p>
                gutschein2go haftet gegenüber Nutzern und Verkäufern
                ausschließlich aus dem Nutzungsvertrag, wobei gutschein2go keine
                Haftung übernimmt für
              </p>
              <p>
                5.2.1 Schäden, die durch unsachgemäße bzw fehlerhafte Bedienung
                des Nutzers bzw des Verkäufers oder aufgrund ungeeigneter,
                verwendeter Hard- oder Software oder aufgrund der
                Internetanbindung entstehen,
              </p>
              <p>
                5.2.2 Schäden die dem Nutzer oder dem Verkäufer durch eine
                rechts- oder vertragswidrige Nutzung des Marktplatzes durch ihn
                selbst oder einen Dritten entstehen,
              </p>
              <p>
                5.2.3 Schäden aus dem Verlust von Inhalten, Informationen oder
                Daten;
              </p>
              <p>
                5.2.4 die Zustellung der Gutscheine an die Nutzer in
                elektronischer Form oder in Papierform.
              </p>
              <p>
                5.3 Gegenüber Verkäufern und gegenüber Nutzern, die Unternehmer
                im Sinne des Konsumentenschutzgesetzes sind, gilt ergänzend zu
                Punkt 4.1 und Punkt 4.2 Folgendes:
              </p>
              <p>
                gutschein2go haftet – ausgenommen bei Personenschäden –
                lediglich bei Vorsatz und grober Fahrlässigkeit. gutschein2go
                haftet – ausgenommen bei Personenschäden – ferner nicht für
                atypische Schäden, mittelbare Schäden, entgangenen Gewinn,
                Folge- und Vermögensschäden oder Schäden aufgrund höherer Gewalt
                (z.B. Streik, Krieg, Erdbeben, Umweltkatastrophen, Epedemien).
                In jedem Fall ist die Haftung von gutschein2go begrenzt auf den
                typischerweise entstehenden, vorhersehbaren Schaden.
                Haftungsansprüche verjähren nach sechs Monaten ab Kenntnis des
                Geschädigten vom Schaden.
              </p>
              <p className="lead font-weight-bold">
                6. Widerrufsrecht | Widerruf vom Nutzungsvertrag
              </p>
              <p>
                6.1 Bei Inanspruchnahme der von gutschein2go auf
                www.gutschein2go.at zur Verfügung gestellten Internetdienste
                entsteht der Nutzungsvertrag. Ist der Nutzer Verbraucher im
                Sinne des Konsumentenschutzgesetzes kann er diesen
                Nutzungsvertrag innerhalb von 14 Tage ab dem Vertragsabschluss
                ohne Angaben von Gründen schriftlich widerrufen.
              </p>
              <p>
                6.2 Zur Ausübung des Widerrufs- bzw Rücktrittsrechts genügt eine
                einfache Mitteilung aus der hervorgeht, dass der Nutzer den
                Nutzungsvertrag widerrufen möchte, wobei dies mit einem mit der
                Post versandten Brief, einem Telefax oder einer E-Mail an die
                nachstehende Adresse zu erfolgen hat. Nutzer können hierfür auch
                das Musterformular im Anhang zu diesen ANB verwenden.
              </p>
              <p className="lead font-weight-bold">7. Schlussbestimmungen</p>
              <p>
                7.1 gutschein2go ist berechtigt, sämtliche Rechte und dem Nutzer
                und Verkäufer gegenüber bestehende Pflichten im Zusammenhang mit
                dem Betrieb des Online-Marktplatzes ganz oder teilweise auf eine
                neu zu gründende Kapitalgesellschaft, an der gutschein2go als
                Gesellschafter beteiligt sein wird, zu übertragen.
              </p>
              <p>
                7.2 Sollte eine oder mehrere der vorangegangenen Bestimmungen
                unwirksam oder undurchführbar sein, bleibt die Wirksamkeit der
                übrigen Bestimmungen davon unberührt. An die Stelle der
                rechtsunwirksamen oder undurchführbaren Bestimmung tritt die
                gesetzliche Regelung.
              </p>
              <p>
                7.3 Auf alle Rechtsverhältnisse zwischen gutschein2go einerseits
                und Nutzern und Verkäufern andererseits findet das Recht der
                Republik Österreich unter Ausschluss aller nationaler und
                internationaler Verweisungsnormen sowie des
                UN-Kaufrechtsübereinkommens Anwendung.
              </p>
              <p>
                7.4 Als ausschließlicher Gerichtsstand wird das sachlich
                zuständige Gericht in 9500 Villach vereinbart. Handelt es sich
                beim Nutzer um einen Verbraucher, ist dieser Gerichtsstand nur
                dann vereinbart, wenn der Verbraucher in diesem Gerichtssprengel
                seinen Wohnsitz, gewöhnlichen Aufenthalt oder Ort der
                Beschäftigung hat; es gilt § 14 KSchG.
              </p>
              <p>7.5 Vertragssprache ist Deutsch.</p>
            </div>
            <div className="text-center">
              <p className="lead">Muster Widerrufsformular nach dem FAGG</p>
              <p>
                (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte
                dieses Formular aus und senden Sie es zurück)
              </p>
            </div>
            <div className="text-left">
              <p>
                An
                <br />
                Werbeagentur Christian Aichner
                <br />
                Emailwerkstraße 29
                <br />
                9523 Villach-Landskron
                <br />
                info@gutschein2go.at
                <br />
                www.gutschein2go.at
              </p>
              <p>Hiermit wiederrufe ich</p>
              <p>
                Vorname: _____________________________________________________
              </p>
              <p>
                Nachname: ____________________________________________________
              </p>
              <p>
                Straße / Nr.: ________________________________________________
              </p>
              <p>
                PLZ / Ort: ___________________________________________________
              </p>
              <p>
                E-Mail: ______________________________________________________
              </p>
              <p>
                 den von mir abgeschlossenen Vertrag über die Inanspruchnahme
                der von gutschein2go auf www.gutschein2go.at zur Verfügung
                gestellten Internetdienste.
              </p>
              <p>
                 den zwischen mir und
                ___________________________________________[Name des Verkäufers]
                am __________ [Datum] abgeschlossenen Kaufvertrag über einen
                Gutschein im Wert von EUR_________________ [Gutscheinwert in
                EUR]. (In diesem Fall wird gutschein2go die Widerrufserklärung
                als Bote an den Verkäufer weiterleiten).
                <br />
                <br />
              </p>
              <p>
                Ort, Datum: _________________________
                <br />
                <br />
              </p>
              <p>
                ______________________________
                <br />
                Unterschrift
              </p>
            </div>
          </div>
        )}
        {this.props.location.pathname === "/privacy" && (
          <div className="text-left mt-5">
            <h2>Datenschutzerklärung</h2>
            <p className="lead mb-0 font-weight-bold">
              Gutschein2Go, ein Service der Werbeagentur Christian Aichner
            </p>
            <p>
              Datenschutzbeauftragter:
              <br />
              <strong>Christian Aichner</strong>
              <br />
              Tel: +43 681 205 027 54
              <br />
              Emailwerkstraße 29
              <br />
              9523 Villach-Landskron
              <br />
              <MDBBtn color="blue" href="mailto:priavcy@gutschein2go.at">
                <MDBIcon far icon="envelope" />
                Kontakt
              </MDBBtn>
            </p>
            <h1>Datenschutzerkl&auml;rung</h1>
            <h2>1. Datenschutz auf einen Blick</h2>
            <h3>Allgemeine Hinweise</h3>{" "}
            <p>
              Die folgenden Hinweise geben einen einfachen &Uuml;berblick
              dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn
              Sie diese Website besuchen. Personenbezogene Daten sind alle
              Daten, mit denen Sie pers&ouml;nlich identifiziert werden
              k&ouml;nnen. Ausf&uuml;hrliche Informationen zum Thema Datenschutz
              entnehmen Sie unserer unter diesem Text aufgef&uuml;hrten
              Datenschutzerkl&auml;rung.
            </p>
            <h3>Datenerfassung auf dieser Website</h3>{" "}
            <p>
              <strong>
                Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser
                Website?
              </strong>
            </p>{" "}
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem
              Impressum dieser Website entnehmen.
            </p>{" "}
            <p>
              <strong>Wie erfassen wir Ihre Daten?</strong>
            </p>{" "}
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die
              Sie in ein Kontaktformular eingeben.
            </p>{" "}
            <p>
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
              Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
              allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem
              oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten
              erfolgt automatisch, sobald Sie diese Website betreten.
            </p>{" "}
            <p>
              <strong>Wof&uuml;r nutzen wir Ihre Daten?</strong>
            </p>{" "}
            <p>
              Ein Teil der Daten wird erhoben, um eine fehlerfreie
              Bereitstellung der Website zu gew&auml;hrleisten. Andere Daten
              k&ouml;nnen zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>{" "}
            <p>
              <strong>
                Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?
              </strong>
            </p>{" "}
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber
              Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein
              Recht, die Berichtigung oder L&ouml;schung dieser Daten zu
              verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung
              erteilt haben, k&ouml;nnen Sie diese Einwilligung jederzeit
              f&uuml;r die Zukunft widerrufen. Au&szlig;erdem haben Sie das
              Recht, unter bestimmten Umst&auml;nden die Einschr&auml;nkung der
              Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des
              Weiteren steht Ihnen ein Beschwerderecht bei der zust&auml;ndigen
              Aufsichtsbeh&ouml;rde zu.
            </p>{" "}
            <p>
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen
              Sie sich jederzeit unter der im Impressum angegebenen Adresse an
              uns wenden.
            </p>
            <h3>Analyse-Tools und Tools von Drittanbietern</h3>{" "}
            <p>
              Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
              ausgewertet werden. Das geschieht vor allem mit Cookies und mit
              sogenannten Analyseprogrammen.
            </p>{" "}
            <p>
              Detaillierte Informationen zu diesen Analyseprogrammen finden Sie
              in der folgenden Datenschutzerkl&auml;rung.
            </p>
            <h2>2. Hosting und Content Delivery Networks (CDN)</h2>
            <h3>Externes Hosting</h3>{" "}
            <p>
              Diese Website wird bei einem externen Dienstleister gehostet
              (Hoster). Die personenbezogenen Daten, die auf dieser Website
              erfasst werden, werden auf den Servern des Hosters gespeichert.
              Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta-
              und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
              Webseitenzugriffe und sonstige Daten, die &uuml;ber eine Website
              generiert werden, handeln.
            </p>{" "}
            <p>
              Der Einsatz des Hosters erfolgt zum Zwecke der
              Vertragserf&uuml;llung gegen&uuml;ber unseren potenziellen und
              bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse
              einer sicheren, schnellen und effizienten Bereitstellung unseres
              Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs.
              1 lit. f DSGVO).
            </p>{" "}
            <p>
              Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies
              zur Erf&uuml;llung seiner Leistungspflichten erforderlich ist und
              unsere Weisungen in Bezug auf diese Daten befolgen.
            </p>
            <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3>Datenschutz</h3>{" "}
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer
              pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre
              personenbezogenen Daten vertraulich und entsprechend der
              gesetzlichen Datenschutzvorschriften sowie dieser
              Datenschutzerkl&auml;rung.
            </p>{" "}
            <p>
              Wenn Sie diese Website benutzen, werden verschiedene
              personenbezogene Daten erhoben. Personenbezogene Daten sind Daten,
              mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen.
              Die vorliegende Datenschutzerkl&auml;rung erl&auml;utert, welche
              Daten wir erheben und wof&uuml;r wir sie nutzen. Sie
              erl&auml;utert auch, wie und zu welchem Zweck das geschieht.
            </p>{" "}
            <p>
              Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet
              (z.&nbsp;B. bei der Kommunikation per E-Mail)
              Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser Schutz
              der Daten vor dem Zugriff durch Dritte ist nicht m&ouml;glich.
            </p>
            <h3>Hinweis zur verantwortlichen Stelle</h3>{" "}
            <p>
              Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf
              dieser Website ist:
            </p>{" "}
            <p>
              Christian Aichner
              <br />
              Emailwerkstra&szlig;e 29
            </p>
            <p>
              Telefon: +4368120502754
              <br />
              E-Mail: contact@aichner-christian.com
            </p>
            <p>
              Verantwortliche Stelle ist die nat&uuml;rliche oder juristische
              Person, die allein oder gemeinsam mit anderen &uuml;ber die Zwecke
              und Mittel der Verarbeitung von personenbezogenen Daten
              (z.&nbsp;B. Namen, E-Mail-Adressen o. &Auml;.) entscheidet.
            </p>
            <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>{" "}
            <p>
              Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer
              ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen
              eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu
              reicht eine formlose Mitteilung per E-Mail an uns. Die
              Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten
              Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.
            </p>
            <h3>
              Widerspruchsrecht gegen die Datenerhebung in besonderen
              F&auml;llen sowie gegen Direktwerbung (Art. 21 DSGVO)
            </h3>{" "}
            <p>
              WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E
              ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS
              GR&Uuml;NDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN,
              GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH
              EINZULEGEN; DIES GILT AUCH F&Uuml;R EIN AUF DIESE BESTIMMUNGEN
              GEST&Uuml;TZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF
              DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER
              DATENSCHUTZERKL&Auml;RUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN
              WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR
              VERARBEITEN, ES SEI DENN, WIR K&Ouml;NNEN ZWINGENDE
              SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R DIE VERARBEITUNG
              NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN
              &Uuml;BERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG,
              AUS&Uuml;BUNG ODER VERTEIDIGUNG VON RECHTSANSPR&Uuml;CHEN
              (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
            </p>{" "}
            <p>
              WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG
              ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN
              DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM
              ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F&Uuml;R DAS
              PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG
              STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN
              ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET
              (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
            </p>
            <h3>
              Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde
            </h3>{" "}
            <p>
              Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den
              Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh&ouml;rde,
              insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen
              Aufenthalts, ihres Arbeitsplatzes oder des Orts des
              mutma&szlig;lichen Versto&szlig;es zu. Das Beschwerderecht besteht
              unbeschadet anderweitiger verwaltungsrechtlicher oder
              gerichtlicher Rechtsbehelfe.
            </p>
            <h3>Recht auf Daten&uuml;bertragbarkeit</h3>{" "}
            <p>
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
              Einwilligung oder in Erf&uuml;llung eines Vertrags automatisiert
              verarbeiten, an sich oder an einen Dritten in einem g&auml;ngigen,
              maschinenlesbaren Format aush&auml;ndigen zu lassen. Sofern Sie
              die direkte &Uuml;bertragung der Daten an einen anderen
              Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch
              machbar ist.
            </p>
            <h3>SSL- bzw. TLS-Verschl&uuml;sselung</h3>{" "}
            <p>
              Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der
              &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel
              Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber
              senden, eine SSL- bzw. TLS-Verschl&uuml;sselung. Eine
              verschl&uuml;sselte Verbindung erkennen Sie daran, dass die
              Adresszeile des Browsers von &bdquo;http://&ldquo; auf
              &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in Ihrer
              Browserzeile.
            </p>{" "}
            <p>
              Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist,
              k&ouml;nnen die Daten, die Sie an uns &uuml;bermitteln, nicht von
              Dritten mitgelesen werden.
            </p>
            <h3>Auskunft, L&ouml;schung und Berichtigung</h3>{" "}
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
              jederzeit das Recht auf unentgeltliche Auskunft &uuml;ber Ihre
              gespeicherten personenbezogenen Daten, deren Herkunft und
              Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein
              Recht auf Berichtigung oder L&ouml;schung dieser Daten. Hierzu
              sowie zu weiteren Fragen zum Thema personenbezogene Daten
              k&ouml;nnen Sie sich jederzeit unter der im Impressum angegebenen
              Adresse an uns wenden.
            </p>
            <h3>Recht auf Einschr&auml;nkung der Verarbeitung</h3>{" "}
            <p>
              Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer
              personenbezogenen Daten zu verlangen. Hierzu k&ouml;nnen Sie sich
              jederzeit unter der im Impressum angegebenen Adresse an uns
              wenden. Das Recht auf Einschr&auml;nkung der Verarbeitung besteht
              in folgenden F&auml;llen:
            </p>{" "}
            <ul>
              {" "}
              <li>
                Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
                personenbezogenen Daten bestreiten, ben&ouml;tigen wir in der
                Regel Zeit, um dies zu &uuml;berpr&uuml;fen. F&uuml;r die Dauer
                der Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der
                Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>{" "}
              <li>
                Wenn die Verarbeitung Ihrer personenbezogenen Daten
                unrechtm&auml;&szlig;ig geschah/geschieht, k&ouml;nnen Sie statt
                der L&ouml;schung die Einschr&auml;nkung der Datenverarbeitung
                verlangen.
              </li>{" "}
              <li>
                Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen,
                Sie sie jedoch zur Aus&uuml;bung, Verteidigung oder
                Geltendmachung von Rechtsanspr&uuml;chen ben&ouml;tigen, haben
                Sie das Recht, statt der L&ouml;schung die Einschr&auml;nkung
                der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>{" "}
              <li>
                Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
                haben, muss eine Abw&auml;gung zwischen Ihren und unseren
                Interessen vorgenommen werden. Solange noch nicht feststeht,
                wessen Interessen &uuml;berwiegen, haben Sie das Recht, die
                Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen
                Daten zu verlangen.
              </li>{" "}
            </ul>{" "}
            <p>
              Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
              eingeschr&auml;nkt haben, d&uuml;rfen diese Daten &ndash; von
              ihrer Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung
              oder zur Geltendmachung, Aus&uuml;bung oder Verteidigung von
              Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen
              nat&uuml;rlichen oder juristischen Person oder aus Gr&uuml;nden
              eines wichtigen &ouml;ffentlichen Interesses der Europ&auml;ischen
              Union oder eines Mitgliedstaats verarbeitet werden.
            </p>
            <h3>Widerspruch gegen Werbe-E-Mails</h3>{" "}
            <p>
              Der Nutzung von im Rahmen der Impressumspflicht
              ver&ouml;ffentlichten Kontaktdaten zur &Uuml;bersendung von nicht
              ausdr&uuml;cklich angeforderter Werbung und
              Informationsmaterialien wird hiermit widersprochen. Die Betreiber
              der Seiten behalten sich ausdr&uuml;cklich rechtliche Schritte im
              Falle der unverlangten Zusendung von Werbeinformationen, etwa
              durch Spam-E-Mails, vor.
            </p>
            <h2>4. Datenerfassung auf dieser Website</h2>
            <h3>Cookies</h3>{" "}
            <p>
              Unsere Internetseiten verwenden so genannte &bdquo;Cookies&ldquo;.
              Cookies sind kleine Textdateien und richten auf Ihrem
              Endger&auml;t keinen Schaden an. Sie werden entweder
              vor&uuml;bergehend f&uuml;r die Dauer einer Sitzung
              (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem
              Endger&auml;t gespeichert. Session-Cookies werden nach Ende Ihres
              Besuchs automatisch gel&ouml;scht. Permanente Cookies bleiben auf
              Ihrem Endger&auml;t gespeichert, bis Sie diese selbst
              l&ouml;schen&nbsp;oder eine automatische L&ouml;schung durch Ihren
              Webbrowser erfolgt.
            </p>{" "}
            <p>
              Teilweise k&ouml;nnen auch Cookies von Drittunternehmen auf Ihrem
              Endger&auml;t gespeichert werden, wenn Sie unsere Seite betreten
              (Third-Party-Cookies). Diese erm&ouml;glichen uns oder Ihnen die
              Nutzung bestimmter Dienstleistungen des Drittunternehmens (z.B.
              Cookies zur Abwicklung von Zahlungsdienstleistungen).
            </p>{" "}
            <p>
              Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind
              technisch notwendig, da bestimmte Webseitenfunktionen ohne diese
              nicht funktionieren w&uuml;rden (z.B. die Warenkorbfunktion oder
              die Anzeige von Videos). Andere Cookies dienen dazu, das
              Nutzerverhalten auszuwerten&nbsp;oder Werbung anzuzeigen.
            </p>{" "}
            <p>
              Cookies, die zur Durchf&uuml;hrung des elektronischen
              Kommunikationsvorgangs (notwendige Cookies) oder zur
              Bereitstellung bestimmter, von Ihnen erw&uuml;nschter Funktionen
              (funktionale Cookies, z. B. f&uuml;r die Warenkorbfunktion) oder
              zur Optimierung der Webseite (z.B. Cookies zur Messung des
              Webpublikums) erforderlich sind, werden auf Grundlage von Art. 6
              Abs. 1 lit. f DSGVO gespeichert, sofern keine andere
              Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein
              berechtigtes Interesse an der Speicherung von Cookies zur
              technisch fehlerfreien und optimierten Bereitstellung seiner
              Dienste. Sofern eine Einwilligung zur Speicherung von Cookies
              abgefragt wurde, erfolgt die Speicherung der betreffenden Cookies
              ausschlie&szlig;lich auf Grundlage dieser Einwilligung (Art. 6
              Abs. 1 lit. a DSGVO); die Einwilligung ist jederzeit widerrufbar.
            </p>{" "}
            <p>
              Sie k&ouml;nnen Ihren Browser so einstellen, dass Sie &uuml;ber
              das Setzen von Cookies informiert werden und Cookies nur im
              Einzelfall erlauben, die Annahme von Cookies f&uuml;r bestimmte
              F&auml;lle oder generell ausschlie&szlig;en sowie das automatische
              L&ouml;schen der Cookies beim Schlie&szlig;en des Browsers
              aktivieren. Bei der Deaktivierung von Cookies kann die
              Funktionalit&auml;t dieser Website eingeschr&auml;nkt sein.
            </p>{" "}
            <p>
              Soweit Cookies von Drittunternehmen oder zu Analysezwecken
              eingesetzt werden, werden wir Sie hier&uuml;ber im Rahmen dieser
              Datenschutzerkl&auml;rung gesondert informieren und ggf. eine
              Einwilligung abfragen.
            </p>
            <h3>Server-Log-Dateien</h3>{" "}
            <p>
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in so genannten Server-Log-Dateien, die Ihr Browser
              automatisch an uns &uuml;bermittelt. Dies sind:
            </p>{" "}
            <ul>
              {" "}
              <li>Browsertyp und Browserversion</li>{" "}
              <li>verwendetes Betriebssystem</li> <li>Referrer URL</li>{" "}
              <li>Hostname des zugreifenden Rechners</li>{" "}
              <li>Uhrzeit der Serveranfrage</li> <li>IP-Adresse</li>{" "}
            </ul>{" "}
            <p>
              Eine Zusammenf&uuml;hrung dieser Daten mit anderen Datenquellen
              wird nicht vorgenommen.
            </p>{" "}
            <p>
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
              lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse
              an der technisch fehlerfreien Darstellung und der Optimierung
              seiner Website &ndash; hierzu m&uuml;ssen die Server-Log-Files
              erfasst werden.
            </p>
            <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>{" "}
            <p>
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird
              Ihre Anfrage inklusive aller daraus hervorgehenden
              personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung
              Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten
              geben wir nicht ohne Ihre Einwilligung weiter.
            </p>{" "}
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erf&uuml;llung
              eines Vertrags zusammenh&auml;ngt oder zur Durchf&uuml;hrung
              vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen
              &uuml;brigen F&auml;llen beruht die Verarbeitung auf unserem
              berechtigten Interesse an der effektiven Bearbeitung der an uns
              gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
              Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
              wurde.
            </p>{" "}
            <p>
              Die von Ihnen an uns per Kontaktanfragen &uuml;bersandten Daten
              verbleiben bei uns, bis Sie uns zur L&ouml;schung auffordern, Ihre
              Einwilligung zur Speicherung widerrufen oder der Zweck f&uuml;r
              die Datenspeicherung entf&auml;llt (z.&nbsp;B. nach
              abgeschlossener Bearbeitung Ihres Anliegens). Zwingende
              gesetzliche Bestimmungen &ndash; insbesondere gesetzliche
              Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.
            </p>
            <h2>5. Soziale Medien</h2>
            <h3>Facebook Plugins (Like &amp; Share-Button)</h3>{" "}
            <p>
              Auf dieser Website sind Plugins des sozialen Netzwerks Facebook
              integriert. Anbieter dieses Dienstes ist die Facebook Ireland
              Limited, 4 Grand Canal Square, Dublin 2, Irland. Die erfassten
              Daten werden nach Aussage von Facebook jedoch auch in die USA und
              in andere Drittl&auml;nder &uuml;bertragen.
            </p>{" "}
            <p>
              Die Facebook Plugins erkennen Sie an dem Facebook-Logo oder dem
              &bdquo;Like-Button&ldquo; (&bdquo;Gef&auml;llt mir&ldquo;) auf
              dieser Website. Eine &Uuml;bersicht &uuml;ber die Facebook Plugins
              finden Sie hier:{" "}
              <a
                href="https://developers.facebook.com/docs/plugins/?locale=de_DE"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://developers.facebook.com/docs/plugins/?locale=de_DE
              </a>
              .
            </p>{" "}
            <p>
              Wenn Sie diese Website besuchen, wird &uuml;ber das Plugin eine
              direkte Verbindung zwischen Ihrem Browser und dem Facebook-Server
              hergestellt. Facebook erh&auml;lt dadurch die Information, dass
              Sie mit Ihrer IP-Adresse diese Website besucht haben. Wenn Sie den
              Facebook &bdquo;Like-Button&ldquo; anklicken w&auml;hrend Sie in
              Ihrem Facebook-Account eingeloggt sind, k&ouml;nnen Sie die
              Inhalte dieser Website auf Ihrem Facebook-Profil verlinken.
              Dadurch kann Facebook den Besuch dieser Website Ihrem
              Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als
              Anbieter der Seiten keine Kenntnis vom Inhalt der
              &uuml;bermittelten Daten sowie deren Nutzung durch Facebook
              erhalten. Weitere Informationen hierzu finden Sie in der
              Datenschutzerkl&auml;rung von Facebook unter:{" "}
              <a
                href="https://de-de.facebook.com/privacy/explanation"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://de-de.facebook.com/privacy/explanation
              </a>
              .
            </p>{" "}
            <p>
              Wenn Sie nicht w&uuml;nschen, dass Facebook den Besuch dieser
              Website Ihrem Facebook-Nutzerkonto zuordnen kann, loggen Sie sich
              bitte aus Ihrem Facebook-Benutzerkonto aus.
            </p>{" "}
            <p>
              Die Verwendung der Facebook Plugins erfolgt auf Grundlage von Art.
              6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
              Interesse an einer m&ouml;glichst umfangreichen Sichtbarkeit in
              den Sozialen Medien. Sofern eine entsprechende Einwilligung
              abgefragt wurde, erfolgt die Verarbeitung ausschlie&szlig;lich auf
              Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist
              jederzeit widerrufbar.
            </p>
            <h2>6. Newsletter</h2>
            <h3>Newsletterdaten</h3>{" "}
            <p>
              Wenn Sie den auf der Website angebotenen Newsletter beziehen
              m&ouml;chten, ben&ouml;tigen wir von Ihnen eine E-Mail-Adresse
              sowie Informationen, welche uns die &Uuml;berpr&uuml;fung
              gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse
              sind und mit dem Empfang des Newsletters einverstanden sind.
              Weitere Daten werden nicht bzw. nur auf freiwilliger Basis
              erhoben. Diese Daten verwenden wir ausschlie&szlig;lich f&uuml;r
              den Versand der angeforderten Informationen und geben diese nicht
              an Dritte weiter.
            </p>{" "}
            <p>
              Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen
              Daten erfolgt ausschlie&szlig;lich auf Grundlage Ihrer
              Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die erteilte
              Einwilligung zur Speicherung der Daten, der E-Mail-Adresse sowie
              deren Nutzung zum Versand des Newsletters k&ouml;nnen Sie
              jederzeit widerrufen, etwa &uuml;ber den
              &bdquo;Austragen&ldquo;-Link im Newsletter. Die
              Rechtm&auml;&szlig;igkeit der bereits erfolgten
              Datenverarbeitungsvorg&auml;nge bleibt vom Widerruf
              unber&uuml;hrt.
            </p>{" "}
            <p>
              Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns
              hinterlegten Daten werden von uns bis zu Ihrer Austragung aus dem
              Newsletter bei uns bzw. dem Newsletterdiensteanbieter gespeichert
              und nach der Abbestellung des Newsletters aus der
              Newsletterverteilerliste gel&ouml;scht. Daten, die zu anderen
              Zwecken bei uns gespeichert wurden bleiben hiervon unber&uuml;hrt.
            </p>{" "}
            <p>
              Nach Ihrer Austragung aus der Newsletterverteilerliste wird Ihre
              E-Mail-Adresse bei uns bzw. dem Newsletterdiensteanbieter ggf. in
              einer Blacklist gespeichert, um k&uuml;nftige Mailings zu
              verhindern. Die Daten aus der Blacklist werden nur f&uuml;r diesen
              Zweck verwendet und nicht mit anderen Daten zusammengef&uuml;hrt.
              Dies dient sowohl Ihrem Interesse als auch unserem Interesse an
              der Einhaltung der gesetzlichen Vorgaben beim Versand von
              Newslettern (berechtigtes Interesse im Sinne des Art. 6 Abs. 1
              lit. f DSGVO). Die Speicherung in der Blacklist ist zeitlich nicht
              befristet.{" "}
              <strong>
                Sie k&ouml;nnen der Speicherung widersprechen, sofern Ihre
                Interessen unser berechtigtes Interesse &uuml;berwiegen.
              </strong>
            </p>
            <h2>7. Plugins und Tools</h2>
            <h3>Google reCAPTCHA</h3>{" "}
            <p>
              Wir nutzen &bdquo;Google reCAPTCHA&ldquo; (im Folgenden
              &bdquo;reCAPTCHA&ldquo;) auf dieser Website. Anbieter ist die
              Google Ireland Limited (&bdquo;Google&ldquo;), Gordon House,
              Barrow Street, Dublin 4, Irland.
            </p>{" "}
            <p>
              Mit reCAPTCHA soll &uuml;berpr&uuml;ft werden, ob die Dateneingabe
              auf dieser Website (z.&nbsp;B. in einem Kontaktformular) durch
              einen Menschen oder durch ein automatisiertes Programm erfolgt.
              Hierzu analysiert reCAPTCHA das Verhalten des Websitebesuchers
              anhand verschiedener Merkmale. Diese Analyse beginnt automatisch,
              sobald der Websitebesucher die Website betritt. Zur Analyse wertet
              reCAPTCHA verschiedene Informationen aus (z.&nbsp;B. IP-Adresse,
              Verweildauer des Websitebesuchers auf der Website oder vom Nutzer
              get&auml;tigte Mausbewegungen). Die bei der Analyse erfassten
              Daten werden an Google weitergeleitet.
            </p>{" "}
            <p>
              Die reCAPTCHA-Analysen laufen vollst&auml;ndig im Hintergrund.
              Websitebesucher werden nicht darauf hingewiesen, dass eine Analyse
              stattfindet.
            </p>{" "}
            <p>
              Die Speicherung und Analyse der Daten erfolgt auf Grundlage von
              Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
              berechtigtes Interesse daran, seine Webangebote vor
              missbr&auml;uchlicher automatisierter Aussp&auml;hung und vor SPAM
              zu sch&uuml;tzen. Sofern eine entsprechende Einwilligung abgefragt
              wurde (z. B. eine Einwilligung zur Speicherung von Cookies),
              erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage von
              Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit
              widerrufbar.
            </p>{" "}
            <p>
              Weitere Informationen zu Google reCAPTCHA entnehmen Sie den
              Google-Datenschutzbestimmungen und den Google Nutzungsbedingungen
              unter folgenden Links:{" "}
              <a
                href="https://policies.google.com/privacy?hl=de"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://policies.google.com/privacy?hl=de
              </a>{" "}
              und{" "}
              <a
                href="https://policies.google.com/terms?hl=de"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://policies.google.com/terms?hl=de
              </a>
              .
            </p>
            <p>
              Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a>
            </p>
          </div>
        )}
      </MDBContainer>
    );
  }
}
//#endregion

//#region > Exports
export default MessagePage;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
