import data
import os

def run():
    if os.path.exists("backstop.json"):
        os.remove("backstop.json")
        create_file(data.data_t['vers1'], data.data_t['vers2'])
    else:
        print("The file does not exist") 
        create_file(data.data_t['vers2'], data.data_t['vers2'])

def create_file(num_vers1:int, num_vers2:int):
    f = open("backstop.json", "a")

    f.write('{  "id": "backstop_default",\n')
    f.write('  "viewports": [\n')
    f.write('    {\n')
    f.write('      "label": "default",\n')
    f.write('      "width": 800,\n')
    f.write('      "height": 600\n')
    f.write('    }\n')
    f.write('  ],\n')
    f.write('  "onBeforeScript": "puppet/onBefore.js",\n')
    f.write('  "onReadyScript": "puppet/onReady.js",\n')
    f.write('  "scenarios": [\n')

    for test in range(data.data_t['num_test']):
        f.write('    {\n')
        f.write('      "label": "' + data.data_t['nom_tests'][test] + '",\n')
        f.write('      "url": "./backstop_data/'+str(num_vers1)+'/'+data.data_t['nom_tests'][test]+'/'+str(test)+'.png",\n')
        f.write('      "referenceUrl": "./backstop_data/'+str(num_vers2)+'/'+data.data_t['nom_tests'][test]+'/'+str(test)+'.png",\n')
        f.write('      "readyEvent": "",\n')
        f.write('      "readySelector": "",\n')
        f.write('      "delay": 0,\n')
        f.write('      "hideSelectors": [],\n')
        f.write('      "removeSelectors": [],\n')
        f.write('      "hoverSelector": "",\n')
        f.write('      "clickSelector": "",\n')
        f.write('      "postInteractionWait": 0,\n')
        f.write('      "selectors": [],\n')
        f.write('      "selectorExpansion": true,\n')
        f.write('      "expect": 0,\n')
        f.write('      "misMatchThreshold" : 0.1,\n')
        f.write('      "requireSameDimensions": true\n')
        if test == data.data_t['num_test']-1:
            f.write('    }\n')
        else:
            f.write('    },\n')

    f.write('  ],\n')
    f.write('  "paths": {\n')
    f.write('    "bitmaps_reference": "backstop_data/bitmaps_reference",\n')
    f.write('    "bitmaps_test": "backstop_data/bitmaps_test",\n')
    f.write('    "engine_scripts": "backstop_data/engine_scripts",\n')
    f.write('    "html_report": "backstop_data/html_report",\n')
    f.write('    "ci_report": "backstop_data/ci_report"\n')
    f.write('  },\n')
    f.write('  "report": ["browser"],\n')
    f.write('  "engine": "puppeteer",\n')
    f.write('  "engineOptions": {\n')
    f.write('    "args": ["--no-sandbox"]\n')
    f.write('  },\n')
    f.write('  "asyncCaptureLimit": 5,\n')
    f.write('  "asyncCompareLimit": 50,\n')
    f.write('  "debug": false,\n')
    f.write('  "debugWindow": false\n')
    f.write('}\n')

    f.close()

run()