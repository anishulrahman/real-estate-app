from flask import Flask,render_template,redirect,request,url_for


app=Flask(__name__)

usremail='aulrahman942@gmail.com'
usrpassword='1234'
@app.route('/',methods=['POST'])
def Main() -> str:
   return render_template("index.html")
@app.route('/login',methods=['POST'])
def Thanks() -> str:
    email=request.form.get['email']
    password=request.form.get['password']
    if email==usremail and password==usrpassword:
        return redirect(url_for("dash")) 
    else:
       return redirect(url_for("Error"))

@app.route('/Dashboard')
def dash() -> str:
    return render_template("Dashboard.html")
@app.route("/Error")
def Error() -> str:
    return render_template("Error.html")
app.run()