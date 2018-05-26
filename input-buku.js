var body = document.body;

var form = document.createElement('form');

form.setAttribute('id', 'buku-form');

body.appendChild(form);

//judul

var judul = document.createElement('p');

form.appendChild(judul);

judul.setAttribute('id', 'buku-judul');

var judulL = document.createElement('label');

judul.appendChild(judulL);

judulL.appendChild(document.createTextNode('Judul Buku: '));

var judulI = document.createElement('input');

judulI.setAttribute('type', 'text');

judul.appendChild(judulI);

//penulis

var penulis = document.createElement('p');

form.appendChild(penulis);

penulis.setAttribute('id', 'buku-penulis');

var penulisL = document.createElement('label');

penulis.appendChild(penulisL);

penulisL.appendChild(document.createTextNode('Penulis Buku: '));

var penulisI = document.createElement('input');

penulisI.setAttribute('type', 'text');

penulis.appendChild(penulisI);

//penerbit

var penerbit = document.createElement('p');

form.appendChild(penerbit);

penerbit.setAttribute('id', 'buku-penerbit');

var penerbitL = document.createElement('label');

penerbit.appendChild(penerbitL);

penerbitL.appendChild(document.createTextNode('Penerbit Buku: '));

var penerbitI = document.createElement('input');

penerbitI.setAttribute('type', 'text');

penerbit.appendChild(penerbitI);

//submit

var submit = document.createElement('p');

form.appendChild(submit);

var input = document.createElement('input');

input.setAttribute('type', 'submit');
input.setAttribute('value', 'Submit');

submit.appendChild(input);
