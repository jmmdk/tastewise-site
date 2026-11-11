// Privacy policy and terms of use (EN + DA). Plain HTML fragments rendered into the legal page template.
const company = {
  name: 'Useful Apps ApS', street: 'Staghøjvej 23A', city: '8210 Aarhus V', countryEn: 'Denmark', countryDa: 'Danmark',
  cvr: 'DK43969188', email: 'hi@gettastewise.com',
};
const updatedEn = '11 November 2026';
const updatedDa = '11. november 2026';
const addrEn = `${company.name}, ${company.street}, ${company.city}, ${company.countryEn}. CVR: ${company.cvr}. Email: <a href="mailto:${company.email}">${company.email}</a>`;
const addrDa = `${company.name}, ${company.street}, ${company.city}, ${company.countryDa}. CVR: ${company.cvr}. E-mail: <a href="mailto:${company.email}">${company.email}</a>`;

export const legal = {
  en: {
    privacy: {
      title: 'Privacy policy', metaTitle: 'Privacy policy – Tastewise', description: 'How Tastewise (Useful Apps ApS) collects, uses and protects your personal data.',
      html: `
<p class="meta">Last updated: ${updatedEn}</p>
<p>This policy explains how the Tastewise app and the website gettastewise.com handle personal data. We collect as little as we can, we never sell your data, we show no ads, and we do not track you across other companies’ apps or websites.</p>
<h2>1. Who is responsible</h2>
<p>The data controller is ${addrEn}.</p>
<h2>2. What we collect and why</h2>
<div class="tbl"><table>
<tr><th>Data</th><th>Purpose</th><th>Legal basis (GDPR)</th></tr>
<tr><td><b>Account data:</b> email address, or the identifier and (if you choose to share it) email from Sign in with Apple or Google Sign-In</td><td>Create and secure your account, send your 6-digit login code, restore your data on a new device</td><td>Contract (Art. 6(1)(b))</td></tr>
<tr><td><b>Onboarding answers:</b> your goals, the foods you find hard, what makes eating difficult for you, meal times, preferred tone, theme and language</td><td>Build your personal plan, archetype and reminders and personalise the app</td><td>Contract (Art. 6(1)(b)). You choose what to answer, and you can change or delete your answers at any time</td></tr>
<tr><td><b>Tasting data:</b> the foods you practise, steps completed, how you felt (for example calm or nervous), notes, challenges, streaks and milestones</td><td>Show your progress, taste profile and next steps</td><td>Contract (Art. 6(1)(b))</td></tr>
<tr><td><b>Purchase data:</b> subscription status, product, trial and renewal dates and an anonymous app user ID. We never see your card details</td><td>Give you access to Premium and restore purchases</td><td>Contract (Art. 6(1)(b))</td></tr>
<tr><td><b>Usage analytics:</b> pseudonymous events such as screens viewed and features used, app version, device type, operating system, language and approximate country</td><td>Understand what works, fix problems and improve the app</td><td>Legitimate interest (Art. 6(1)(f)). Data is pseudonymous and stored in the EU. You can object at any time by emailing us</td></tr>
<tr><td><b>Crash and error reports:</b> error messages and technical details about what went wrong, app version, device type and operating system, linked to your pseudonymous user ID</td><td>Find and fix bugs and keep the app stable</td><td>Legitimate interest (Art. 6(1)(f))</td></tr>
<tr><td><b>Support emails</b> you send us</td><td>Answer your questions</td><td>Legitimate interest (Art. 6(1)(f))</td></tr>
</table></div>
<p>Reminders and Live Activities (meal-time missions) are created on your device. We do not use your location, contacts, photos, microphone or camera.</p>
<h2>3. Service providers</h2>
<p>We use carefully chosen providers (data processors) that only process data on our instructions and under a data processing agreement:</p>
<ul>
<li><b>Supabase</b> (database, login and hosting of your account, onboarding and tasting data), hosted in the EU (Frankfurt, Germany)</li>
<li><b>RevenueCat</b> (subscription management)</li>
<li><b>PostHog</b>, EU cloud (product analytics and crash/error reports)</li>
<li><b>Resend</b> (sending login-code emails)</li>
</ul>
<p>When you sign in with Apple or Google, or buy a subscription through the App Store or Google Play, Apple and Google process your data under their own privacy policies.</p>
<h2>4. Transfers outside the EU/EEA</h2>
<p>Some providers are based in the United States or may process data there. In that case the transfer is covered by the European Commission’s adequacy decision for the EU–US Data Privacy Framework or by the Commission’s Standard Contractual Clauses.</p>
<h2>5. How long we keep data</h2>
<ul>
<li>Account, onboarding and tasting data: as long as you have an account. When you delete your account in the app, we delete the data within 30 days (backups are overwritten within a further 30 days).</li>
<li>Analytics data and crash reports: up to 24 months, after which they are deleted or anonymised.</li>
<li>Purchase records: as long as required by accounting law.</li>
</ul>
<h2>6. Your rights</h2>
<p>You have the right to access, correct, delete and export your data, to restrict or object to processing, and to withdraw consent at any time (this does not affect processing that happened before). You can delete your account directly in the app under Profile, or email us at <a href="mailto:${company.email}">${company.email}</a>. You can also complain to the Danish Data Protection Agency (Datatilsynet), <a href="https://www.datatilsynet.dk" rel="noopener">datatilsynet.dk</a>, or to the authority in your own country.</p>
<h2>7. Security</h2>
<p>Data is encrypted in transit (HTTPS/TLS) and access is limited to people who need it. Login uses one-time codes or Apple/Google, so we never store a password for you.</p>
<h2>8. Age</h2>
<p>Tastewise is made for adults and is not intended for people under 18. We do not knowingly collect data from children.</p>
<h2>9. Website</h2>
<p>gettastewise.com is a static website hosted by GitHub Pages. It does not use cookies, analytics or ads. GitHub may log technical data such as IP addresses for security purposes.</p>
<h2>10. Changes</h2>
<p>If we change this policy in a meaningful way, we will tell you in the app before the change takes effect. The date at the top always shows the latest version.</p>
<h2>11. Contact</h2>
<p>${addrEn}</p>`,
    },
    terms: {
      title: 'Terms of use', metaTitle: 'Terms of use – Tastewise', description: 'The terms that apply when you use the Tastewise app and subscribe to Tastewise Premium.',
      html: `
<p class="meta">Last updated: ${updatedEn}</p>
<p>These terms apply when you use the Tastewise app (“the app”). The app is provided by ${addrEn}. By creating an account or using the app, you accept these terms.</p>
<h2>1. What Tastewise is, and what it is not</h2>
<div class="box"><p><b>Tastewise is a self-help and habit tool for adults who are picky eaters. It is not medical treatment, therapy or nutritional advice, and it does not diagnose or treat ARFID or any eating disorder.</b> If you think you may have an eating disorder, if you are losing weight, or if eating affects your health or daily life, please talk to a doctor, psychologist or dietitian.</p></div>
<ul>
<li>Never taste a food you are allergic or intolerant to, and follow any advice from your doctor about your diet.</li>
<li>You decide which foods you try and how far you go. You can stop at any time.</li>
<li>Stop and seek help if you feel unwell. In an emergency, call your local emergency number.</li>
</ul>
<h2>2. Who can use the app</h2>
<p>You must be at least 18 years old. You are responsible for keeping access to your email or Apple/Google account secure.</p>
<h2>3. Premium subscription</h2>
<ul>
<li>Some features require Tastewise Premium. Premium is sold as an auto-renewing yearly or monthly subscription through the App Store or Google Play. Price and period are shown before you buy.</li>
<li>A free trial may be offered. If you do not cancel at least 24 hours before the trial ends, the subscription starts and you are charged.</li>
<li>The subscription renews automatically unless you cancel at least 24 hours before the end of the current period. You manage and cancel it in your App Store or Google Play account settings. Deleting the app does not cancel the subscription.</li>
<li>Payments, refunds and statutory withdrawal rights are handled by Apple or Google under their terms. By starting a subscription with immediate access, you agree that digital content is delivered right away.</li>
<li>We may change prices for future periods. You will be told in advance and can cancel before the new price applies.</li>
</ul>
<h2>4. Your content and acceptable use</h2>
<p>You keep the rights to notes and text you write in the app. You give us permission to store and process them only to run the app for you. Do not misuse the app, try to access other people’s data, or reverse engineer it beyond what the law allows.</p>
<h2>5. Our content</h2>
<p>The app, its texts, illustrations, the turtle character and the Tastewise name belong to Useful Apps ApS or our licensors. You get a personal, non-transferable right to use the app for your own, non-commercial purposes.</p>
<h2>6. Availability and changes</h2>
<p>We work to keep the app running and improving, but we cannot guarantee that it is always available or error-free. We may change or remove features. If we discontinue Premium, we will give reasonable notice.</p>
<h2>7. Liability</h2>
<p>To the extent the law allows, we are not liable for indirect losses or for outcomes of food choices you make. Nothing in these terms limits liability that cannot be limited by law, including your mandatory rights as a consumer.</p>
<h2>8. Ending the agreement</h2>
<p>You can stop using the app and delete your account at any time in the app. We may suspend accounts that seriously breach these terms.</p>
<h2>9. Law and disputes</h2>
<p>These terms are governed by Danish law. Disputes are settled by the Danish courts, but you always keep the protection of the mandatory consumer laws of the country where you live and can bring a case there. Consumers in Denmark can also complain to the Danish Board of Appeals (Nævnenes Hus), <a href="https://naevneneshus.dk" rel="noopener">naevneneshus.dk</a>.</p>
<h2>10. Changes to these terms</h2>
<p>We may update these terms. Material changes are announced in the app before they take effect.</p>
<h2>11. Contact</h2>
<p>${addrEn}</p>`,
    },
  },
  da: {
    privacy: {
      title: 'Privatlivspolitik', metaTitle: 'Privatlivspolitik – Tastewise', description: 'Sådan indsamler, bruger og beskytter Tastewise (Useful Apps ApS) dine personoplysninger.',
      html: `
<p class="meta">Senest opdateret: ${updatedDa}</p>
<p>Denne politik forklarer, hvordan appen Tastewise og hjemmesiden gettastewise.com behandler personoplysninger. Vi indsamler så lidt som muligt, vi sælger aldrig dine data, vi viser ingen reklamer, og vi sporer dig ikke på tværs af andre virksomheders apps eller hjemmesider.</p>
<h2>1. Dataansvarlig</h2>
<p>Dataansvarlig er ${addrDa}.</p>
<h2>2. Hvad vi indsamler, og hvorfor</h2>
<div class="tbl"><table>
<tr><th>Oplysninger</th><th>Formål</th><th>Retsgrundlag (GDPR)</th></tr>
<tr><td><b>Kontooplysninger:</b> e-mailadresse eller det id og (hvis du vælger at dele den) den e-mail, du får fra Log ind med Apple eller Google</td><td>Oprette og sikre din konto, sende din 6-cifrede login-kode og gendanne dine data på en ny enhed</td><td>Aftale (art. 6, stk. 1, litra b)</td></tr>
<tr><td><b>Svar fra onboarding:</b> dine mål, den mad du synes er svær, hvad der gør det svært for dig at spise, spisetider, foretrukken tone, tema og sprog</td><td>Lave din personlige plan, arketype og påmindelser og tilpasse appen til dig</td><td>Aftale (art. 6, stk. 1, litra b). Du vælger selv, hvad du svarer, og du kan altid ændre eller slette dine svar</td></tr>
<tr><td><b>Smagsdata:</b> de madvarer du øver, gennemførte skridt, hvordan du havde det (fx rolig eller nervøs), noter, udfordringer, streaks og milepæle</td><td>Vise dine fremskridt, din smagsprofil og dine næste skridt</td><td>Aftale (art. 6, stk. 1, litra b)</td></tr>
<tr><td><b>Købsoplysninger:</b> abonnementsstatus, produkt, datoer for prøveperiode og fornyelse samt et anonymt bruger-id. Vi ser aldrig dine kortoplysninger</td><td>Give dig adgang til Premium og gendanne køb</td><td>Aftale (art. 6, stk. 1, litra b)</td></tr>
<tr><td><b>Brugsstatistik:</b> pseudonyme hændelser som viste skærme og brugte funktioner, appversion, enhedstype, styresystem, sprog og omtrentligt land</td><td>Forstå, hvad der virker, rette fejl og forbedre appen</td><td>Legitim interesse (art. 6, stk. 1, litra f). Dataene er pseudonyme og gemmes i EU. Du kan altid gøre indsigelse ved at skrive til os</td></tr>
<tr><td><b>Fejl- og nedbrudsrapporter:</b> fejlbeskeder og tekniske detaljer om, hvad der gik galt, appversion, enhedstype og styresystem, knyttet til dit pseudonyme bruger-id</td><td>Finde og rette fejl og holde appen stabil</td><td>Legitim interesse (art. 6, stk. 1, litra f)</td></tr>
<tr><td><b>Supportmails</b>, du sender til os</td><td>Besvare dine spørgsmål</td><td>Legitim interesse (art. 6, stk. 1, litra f)</td></tr>
</table></div>
<p>Påmindelser og Live Activities (missioner ved måltidet) oprettes på din enhed. Vi bruger ikke din placering, dine kontakter, billeder, mikrofon eller kamera.</p>
<h2>3. Leverandører</h2>
<p>Vi bruger nøje udvalgte leverandører (databehandlere), som kun behandler data efter vores instruks og under en databehandleraftale:</p>
<ul>
<li><b>Supabase</b> (database, login og hosting af din konto, onboarding- og smagsdata), hostet i EU (Frankfurt, Tyskland)</li>
<li><b>RevenueCat</b> (håndtering af abonnementer)</li>
<li><b>PostHog</b>, EU-cloud (produktstatistik og fejl- og nedbrudsrapporter)</li>
<li><b>Resend</b> (afsendelse af e-mails med login-kode)</li>
</ul>
<p>Når du logger ind med Apple eller Google eller køber et abonnement via App Store eller Google Play, behandler Apple og Google dine data efter deres egne privatlivspolitikker.</p>
<h2>4. Overførsel uden for EU/EØS</h2>
<p>Nogle leverandører har hjemsted i USA eller kan behandle data der. I så fald er overførslen dækket af EU-Kommissionens tilstrækkelighedsafgørelse for EU-US Data Privacy Framework eller af Kommissionens standardkontraktbestemmelser.</p>
<h2>5. Hvor længe vi gemmer data</h2>
<ul>
<li>Konto-, onboarding- og smagsdata: så længe du har en konto. Når du sletter din konto i appen, sletter vi dataene inden for 30 dage (backups overskrives inden for yderligere 30 dage).</li>
<li>Statistikdata og fejlrapporter: op til 24 måneder, hvorefter de slettes eller anonymiseres.</li>
<li>Købsoplysninger: så længe bogføringsloven kræver det.</li>
</ul>
<h2>6. Dine rettigheder</h2>
<p>Du har ret til indsigt, berigtigelse, sletning og dataportabilitet, til at begrænse eller gøre indsigelse mod behandlingen og til at trække dit samtykke tilbage når som helst (det påvirker ikke behandling, der er sket forinden). Du kan slette din konto direkte i appen under Profil eller skrive til <a href="mailto:${company.email}">${company.email}</a>. Du kan også klage til Datatilsynet, <a href="https://www.datatilsynet.dk" rel="noopener">datatilsynet.dk</a>.</p>
<h2>7. Sikkerhed</h2>
<p>Data krypteres under overførsel (HTTPS/TLS), og adgangen er begrænset til dem, der har brug for den. Login sker med engangskoder eller Apple/Google, så vi gemmer aldrig en adgangskode for dig.</p>
<h2>8. Alder</h2>
<p>Tastewise er lavet til voksne og er ikke beregnet til personer under 18 år. Vi indsamler ikke bevidst data om børn.</p>
<h2>9. Hjemmesiden</h2>
<p>gettastewise.com er en statisk hjemmeside, der hostes af GitHub Pages. Den bruger ikke cookies, statistik eller reklamer. GitHub kan logge tekniske data som IP-adresser af sikkerhedshensyn.</p>
<h2>10. Ændringer</h2>
<p>Hvis vi ændrer politikken væsentligt, fortæller vi det i appen, før ændringen træder i kraft. Datoen øverst viser altid den nyeste version.</p>
<h2>11. Kontakt</h2>
<p>${addrDa}</p>`,
    },
    terms: {
      title: 'Vilkår', metaTitle: 'Vilkår – Tastewise', description: 'De vilkår, der gælder, når du bruger appen Tastewise og abonnerer på Tastewise Premium.',
      html: `
<p class="meta">Senest opdateret: ${updatedDa}</p>
<p>Disse vilkår gælder, når du bruger appen Tastewise (“appen”). Appen leveres af ${addrDa}. Når du opretter en konto eller bruger appen, accepterer du vilkårene.</p>
<h2>1. Hvad Tastewise er, og hvad det ikke er</h2>
<div class="box"><p><b>Tastewise er et selvhjælps- og vaneværktøj til voksne, der er kræsne med mad. Det er ikke medicinsk behandling, terapi eller kostvejledning, og det stiller ikke diagnoser og behandler ikke ARFID eller nogen spiseforstyrrelse.</b> Hvis du tror, du kan have en spiseforstyrrelse, hvis du taber dig, eller hvis maden påvirker dit helbred eller din hverdag, så tal med en læge, psykolog eller diætist.</p></div>
<ul>
<li>Smag aldrig på mad, du er allergisk over for eller ikke tåler, og følg altid din læges råd om din kost.</li>
<li>Du bestemmer, hvilken mad du prøver, og hvor langt du går. Du kan stoppe når som helst.</li>
<li>Stop og søg hjælp, hvis du får det dårligt. Ring 112 i en nødsituation.</li>
</ul>
<h2>2. Hvem kan bruge appen</h2>
<p>Du skal være mindst 18 år. Du er selv ansvarlig for at holde adgangen til din e-mail eller din Apple- eller Google-konto sikker.</p>
<h2>3. Premium-abonnement</h2>
<ul>
<li>Nogle funktioner kræver Tastewise Premium. Premium sælges som et automatisk fornyet års- eller månedsabonnement via App Store eller Google Play. Pris og periode vises, før du køber.</li>
<li>Der kan være en gratis prøveperiode. Hvis du ikke opsiger senest 24 timer før prøveperioden slutter, starter abonnementet, og du bliver opkrævet.</li>
<li>Abonnementet fornyes automatisk, medmindre du opsiger senest 24 timer før den aktuelle periode udløber. Du styrer og opsiger det i dine kontoindstillinger i App Store eller Google Play. Det opsiger ikke abonnementet at slette appen.</li>
<li>Betaling, refusion og lovbestemt fortrydelsesret håndteres af Apple eller Google efter deres vilkår. Når du starter et abonnement med adgang med det samme, accepterer du, at det digitale indhold leveres med det samme.</li>
<li>Vi kan ændre priserne for fremtidige perioder. Du får besked i forvejen og kan opsige, før den nye pris gælder.</li>
</ul>
<h2>4. Dit indhold og god brug</h2>
<p>Du beholder rettighederne til noter og tekst, du skriver i appen. Du giver os lov til at gemme og behandle dem alene for at kunne levere appen til dig. Du må ikke misbruge appen, forsøge at få adgang til andres data eller foretage reverse engineering ud over, hvad loven tillader.</p>
<h2>5. Vores indhold</h2>
<p>Appen, dens tekster, illustrationer, skildpadden og navnet Tastewise tilhører Useful Apps ApS eller vores licensgivere. Du får en personlig ret, der ikke kan overdrages, til at bruge appen til dine egne, ikke-kommercielle formål.</p>
<h2>6. Tilgængelighed og ændringer</h2>
<p>Vi arbejder for, at appen kører og bliver bedre, men vi kan ikke garantere, at den altid er tilgængelig eller fejlfri. Vi kan ændre eller fjerne funktioner. Hvis vi lukker Premium, giver vi rimeligt varsel.</p>
<h2>7. Ansvar</h2>
<p>I det omfang loven tillader det, er vi ikke ansvarlige for indirekte tab eller for følgerne af de madvalg, du træffer. Intet i vilkårene begrænser ansvar, som ikke kan begrænses efter loven, herunder dine ufravigelige rettigheder som forbruger.</p>
<h2>8. Ophør</h2>
<p>Du kan til enhver tid stoppe med at bruge appen og slette din konto i appen. Vi kan suspendere konti, der groft overtræder vilkårene.</p>
<h2>9. Lovvalg og tvister</h2>
<p>Vilkårene er underlagt dansk ret, og tvister afgøres ved de danske domstole. Du bevarer altid beskyttelsen efter de ufravigelige forbrugerregler i det land, du bor i. Du kan også klage til Nævnenes Hus, <a href="https://naevneneshus.dk" rel="noopener">naevneneshus.dk</a>.</p>
<h2>10. Ændringer i vilkårene</h2>
<p>Vi kan opdatere vilkårene. Væsentlige ændringer meddeles i appen, før de træder i kraft.</p>
<h2>11. Kontakt</h2>
<p>${addrDa}</p>`,
    },
  },
};
