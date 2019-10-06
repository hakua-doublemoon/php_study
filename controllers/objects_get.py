import sys
import json
import re
import pprint

obj_json = {'objs' : []}

args = sys.argv
fp = open(args[1], "r")
#has_found = False
for line in fp:
    #if  not has_found:
    #    if  re.match('.*\{$', line):
    #        has_found = True
    if  not re.match('.*\{$', line):
        continue
    strs = re.split('\s+', line)
    #pprint.pprint(strs)
    obj = {"name": strs[0]}
    obj_json['objs'].append(obj)
    #has_found = False

fp.close()

print(json.dumps(obj_json))
