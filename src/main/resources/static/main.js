//Oppretter et tomt array for å lagre objektene om de kjøpte billettene.
const billetter = [];

//Funksjonen som blir kalt når brukeren skal kjøpe billettene.
function kjop() {
    const valgtFilm = document.getElementById('filmer').value;
    const antall = document.getElementById('antall').value;
    const fornavn = document.getElementById('fornavn').value;
    const etternavn = document.getElementById('etternavn').value;
    const tlfNr = document.getElementById('telefonnr').value;
    const epost = document.getElementById('epost').value;

    //Validering for film.
    if (valgtFilm === 'velgFilm'){
        document.getElementById('feilFilm').textContent = 'Vennligst velg en film';
    } else {
        document.getElementById('feilFilm').textContent = '';
    }

    //Validering for antall.
    if (!antall || isNaN(antall) || antall <= 0){
        document.getElementById('feilAntall').textContent = 'Vennligst skriv inn antall billetter';
    } else {
        document.getElementById('feilAntall').textContent = '';
    }

    //Validering for fornavn. SJEKK DENNE
    if (!fornavn){
        document.getElementById('feilFornavn').textContent = 'Vennligst skriv inn et fornavn';
    } else {
        document.getElementById('feilFornavn').textContent = '';
    }

    //Validering for etternavn. SJEKK DENNE
    if (!etternavn){
        document.getElementById('feilEtternavn').textContent = 'Vennligst skriv inn et etternavn';
    } else {
        document.getElementById('feilEtternavn').textContent = '';
    }

    //Validering for tlfnr. Må ha 8 nummer.
    //Kilde: https://stackoverflow.com/questions/73656999/regex-to-validate-only-digits-from-0-9-maximum-of-8-digits-till-a-dot-and-only
    if (!tlfNr || !/^[0-9]{8}$/.test(tlfNr)){
        document.getElementById('feilTelefonnr').textContent = 'Vennligst skriv inn et gyldig telefonnummer';
    } else {
        document.getElementById('feilTelefonnr').textContent = '';
    }

    //Validering for epost. På denne formen: x@x.x.
    //Kilde: https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
    if (!epost || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(epost)){
        document.getElementById('feilEpost').textContent = 'Vennligst skriv inn en gyldig epost';
    } else {
        document.getElementById('feilEpost').textContent = '';
    }

    const billett = {
        valgtFilm: valgtFilm,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        tlfNr: tlfNr,
        epost: epost
    };
    billetter.push(billett);


    visBilletter();
}

function visBilletter(){
    const billettListeDiv = document.getElementById('alleBilletter');
    billettListeDiv.innerHTML;

    billetter.forEach(billett => {
        const billettInfo = `<p>
            Film: ${billett.valgtFilm}<br>
            Antall: ${billett.antall}<br>
            Fornavn: ${billett.fornavn}<br>
            Etternavn: ${billett.etternavn}<br>
            TlfNr: ${billett.tlfNr}<br>
            Epost: ${billett.epost}
            </p>`;

        billettListeDiv.innerHTML += billettInfo;
    });
}

//Sletter billettene i arrayet.
function slett() {
    billetter.length = 0;
    visBilletter();

    document.getElementById('filmer').value = 'velgFilm';
    document.getElementById('antall').value = '';
    document.getElementById('fornavn').value = '';
    document.getElementById('etternavn').value = '';
    document.getElementById('telefonnr').value = '';
    document.getElementById('epost').value = '';

    document.getElementById('alleBilletter').innerHTML = '';
}

