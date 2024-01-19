from flask import Flask, render_template, request
import sqlite3 as sql

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/enternew')
def new():
    return render_template('produs.html')

@app.route('/addNew', methods=['POST'])
def functionAddNew():
    action = request.form.get('action')

    if action == 'add':
        # Add new record logic
        try:
            nm = request.form['name']
            price = request.form['price']
            quantity = request.form['quantity']
            description = request.form['description']

            with sql.connect('database.db') as con:
                cur = con.cursor()
                cur.execute("INSERT INTO produse(name, price, cantitate, descriere) VALUES(?,?,?,?)", (nm, price, quantity, description))
                con.commit()
                msg = "Record added"
        except:
            con.rollback()
            msg = "Error in insert"
        finally:
            con.close()

    elif action == 'delete_all':
        # Delete all records logic
        try:
            with sql.connect('database.db') as con:
                cur = con.cursor()
                cur.execute("DELETE FROM produse")
                con.commit()
                msg = "Db deleted"
        except:
            con.rollback()
            msg = "Error deleting the db"
        finally:
            con.close()

    return render_template("result.html", msg=msg)
@app.route('/update/<int:id>', methods=['GET', 'POST'])
def update(id):
    if request.method == 'GET':
        # Fetch the record with the given id
        con = sql.connect('database.db')
        con.row_factory = sql.Row
        cur = con.cursor()
        cur.execute("SELECT * FROM produse WHERE id = ?", (id,))
        record = cur.fetchone()
        con.close()

        return render_template("update.html", record=record)

    elif request.method == 'POST': 
        nm = request.form['name']
        price = request.form['price']
        quantity = request.form['quantity']
        description = request.form['description']

        try:
            with sql.connect('database.db') as con:
                cur = con.cursor()
                cur.execute("UPDATE produse SET name=?, price=?, cantitate=?, descriere=? WHERE id=?", (nm, price, quantity, description, id))
                con.commit()
                msg = "Record updated"
        except:
            con.rollback()
            msg = "Error updating the record"
        finally:
            con.close()

        return render_template("result.html", msg=msg)


@app.route('/list')
def list():
    con = sql.connect('database.db')
    con.row_factory = sql.Row
    cur = con.cursor()
    cur.execute("select * from produse")
    rows = cur.fetchall()
    print(rows)
    return render_template("list.html",rows = rows)

if __name__ == '__main__':
    app.run(debug=True)
