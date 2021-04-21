const fs = require('fs')

class DataStore{
  filename = null
  path = null
  data = null

  constructor(_path = './', _filename = 'data.json'){
    this.path = _path
    this.filename = _filename

    this.syncFromFile()

  }

  syncFromFile(){
    if (fs.existsSync(this.path+this.filename)) {
      try {
        this.data  = JSON.parse(fs.readFileSync(this.path + this.filename, 'utf8'))

      } catch (err) {
        console.error(err)
      }
    }
    else{
      this.data = {}
    }
  }


  set(option,value){
    this.data[option] = value
    this.save()
    return this
  }

  get(option){
    return this.data[option] ?? null
  }

  save(){
    try {
      fs.writeFileSync((this.path + this.filename), JSON.stringify(this.data), 'utf8')
    } catch (err) {
      console.error(err)
    }
  }
}

module.exports = DataStore;
