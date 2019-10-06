import sys
import re
import pprint

args = sys.argv
fname = args[1]
target = args[2]

retd = [{"#" : str(0)}]

fp = open(fname, "r")
has_found = False
for line in fp:
    if  not has_found:
        if  target in line:
            has_found = True
        continue
    else:
        if  re.match('.*\},$', line):
            continue
        elif  re.match('.*\{$', line):
            break
        else:
            strs = re.split('\s+', line)
            retd[0].setdefault(strs[1], str(strs[3]))

fp.close()

rets = ','.join(retd[0].keys()) + "\n"
for d in retd:
    rets += ','.join(d.values()) + "\n"

print(rets)
