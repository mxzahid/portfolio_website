let dataPL = {
    skills: [
    {
      "type": "Python",
      "level": 100,
      "color": {
        "bar": "#FF7F50",
        "title": {
          "text": "#fff",
          "background": "#FF6347"
        }
      }
    },
    {
      "type": "JavaScript",
      "level": 85,
      "color": {
        "bar":"#32CD32",
        "title": {
          "text": "#fefefe",
          "background": "#228B22"
        }
      }
    },
    {
      "type": "Java",
      "level": 70,
      "color": {
        "bar": "#7B68EE",
        "title": {
          "text": "#fff",
          "background": "#6A5ACD"
        }
      }
      
    },
    {
      "type": "C",
      "level": 50,
      "color": {
        "bar": "#5a68a5",
        "title": {
          "text": "#fff",
          "background": "#46465e"
        }
      }
      
    }],
    colors:{
        "bar": {
          "hue": 32,
          "saturation": 50,
          "level": {
            "minimum": 0,
            "maximum": 70
          }
        },
        "title": {
          "text": {
            "hue": 45,
            "saturation": {
              "minimum": 30,
              "maximum": 70
            },
            "level": 50
          },
          "background": {
            "hue": 30,
            "saturation": {
              "minimum": 30,
              "maximum": 70
            },
            "level": {
              "minimum": 0,
              "maximum": 50
            }
          }
        }
    }
}

export default dataPL;