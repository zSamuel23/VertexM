from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def inicio():
    return render_template("index.html")

@app.route("/perfil")
def perfil():
    return render_template("perfil.html")

@app.route("/historial")
def historial():
    return render_template("historial.html")

@app.route("/encuesta")
def encuesta():
    return render_template("encuesta.html")

@app.route("/admin")
def admin():
    return render_template("admin.html")

if __name__ == "__main__":
    app.run(debug=True)
