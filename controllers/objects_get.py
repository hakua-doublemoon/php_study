import sys
import json
import re
import pprint

obj_json = {'objs' : []}

args = sys.argv
fp = open(args[1], "rb")
#has_found = False

while True:
    try:
        bline = fp.readline()
        line = bline.decode('utf-8', "replace")
        print(line)
        if  line == "":
            break
        if  not re.match('.*\{$', line):
            continue
        strs = re.split('\s+', line)
        obj = {"name": strs[0]}
        obj_json['objs'].append(obj)
    except Exception as err:
        print(err)
        exit(1)

fp.close()

print(json.dumps(obj_json))
