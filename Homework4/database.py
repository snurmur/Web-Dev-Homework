import sqlite3

connect = sqlite3.connect("database.db")
print('database connected')
#connect.execute("DROP TABLE produse")
connect.execute("CREATE TABLE produse (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price REAL, cantitate INTEGER, descriere TEXT)")
print('table created')
connect.close()