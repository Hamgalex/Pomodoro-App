/* DROP TABLE IF EXISTS registro; */
CREATE TABLE IF NOT EXISTS registro(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fecha TEXT,
    numciclos INTEGER,
    minsporciclo INTEGER
);

/* INSERT or IGNORE INTO registro(fecha, numciclos,minsporciclo ) VALUES ( date('now','start of month','+1 month','-1 day'), 1,5);
INSERT or IGNORE INTO registro(fecha, numciclos,minsporciclo ) VALUES ( date('now','start of month','+1 month','-2 day'), 2,10);
INSERT or IGNORE INTO registro(fecha, numciclos,minsporciclo ) VALUES ( date('now','start of month','+1 month','-3 day'), 3,15);
INSERT or IGNORE INTO registro(fecha, numciclos,minsporciclo ) VALUES ( date('now','start of month','+1 month','-4 day'), 4,20);
INSERT or IGNORE INTO registro(fecha, numciclos,minsporciclo ) VALUES ( date('now','start of month','+1 month','-5 day'), 5,25);
INSERT or IGNORE INTO registro(fecha, numciclos,minsporciclo ) VALUES ( date('now','start of month','+1 month','-6 day'), 6,30); */
