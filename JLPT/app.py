from flask import Flask, render_template, url_for, redirect

app = Flask(__name__)

@app.route("/")
def index():
    return redirect(url_for('homepage'))

@app.route("/home")
def homepage():
    return render_template('index.html')

@app.route("/hiragana")
def hiragana():
    return render_template('hiragana.html')

@app.route("/katakana")
def katakana():
    return render_template('katakana.html')

@app.route("/kanji")
def kanji():
    return render_template('kanji.html')

@app.route("/hiragana-characters")
def hiraganaCharacters():
    return render_template('hiraganacharacters.html')

@app.route("/katakana-characters")
def katakanaCharacters():
    return render_template('katakanacharacters.html')

@app.route("/kanji-characters")
def kanjiCharacters():
    return render_template('kanjicharacters.html')


if __name__ == "__main__":
    app.run()