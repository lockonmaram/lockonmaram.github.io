var body = document.body;

var table = document.createElement('table');

body.appendChild(table);

//list Buku

var buku = [['1.', 'Perebutan Takhta', 'George Martin', 'Fantasious'], ['2.', 'Peperangan Raja-Raja', 'George Martin', 'Fantasious'], ['3.', 'Amukan Baja', 'George Martin', 'Fantasious'], ['4.', 'The Hobbit', 'John Tolkien', 'Gramedia'], ['5.', 'Hewan-Hewan Fantastis dan Di Mana Mereka Bisa Ditemukan', 'Newt Scamander', 'Gramedia']];

//table

var tr = document.createElement('tr');

table.appendChild(tr);

var no = document.createElement('th');

no.innerHTML = 'No.';

tr.appendChild(no);

var judul = document.createElement('th');

judul.innerHTML = 'Title';

tr.appendChild(judul);

var penulis = document.createElement('th');

penulis.innerHTML = 'Writter';

tr.appendChild(penulis);

var penerbit = document.createElement('th');
penerbit.innerHTML = 'Publisher';

tr.appendChild(penerbit);

//list to table

for (var i = 0; i < buku.length; i++) {
  var tr = document.createElement('tr');
  for (var j = 0; j < buku[i].length; j++) {
    var td = document.createElement('td');
    td.innerHTML = buku[i][j];
    tr.appendChild(td);
  }

  table.appendChild(tr);
}
