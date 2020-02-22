import sys
import re
import pprint

import collections

args = sys.argv
fname = args[1]
target = args[2]

retd = collections.OrderedDict()
retd["#"] = str(0)

fp = open(fname, "r")
has_found = False
sub_attr = [""]
union_max = 0
union_cnt = 0
for line in fp:
    if  not has_found:
        if  target in line:
            has_found = True
        continue
    else:
        if  re.match(r'.*\},$', line):
            continue
        elif  re.match(r'.*\}$', line):
            union_cnt -= 1
            sub_attr.pop(-1)
        elif  re.match(r'.*= \{$', line):
            break
        elif  re.match(r'.*=: \{$', line):
            strs = re.split('\s+', line)
            sub_attr.append(str(strs[1])+"@")
            union_cnt += 1
            if  union_max < union_cnt:
                union_max = union_cnt
        else:
            strs = re.split('\s+', line)
            #retd[0].setdefault("".join(sub_attr)+strs[1], str(strs[3]))
            retd["".join(sub_attr)+strs[1]] = str(strs[3])
            print('{},{}'.format("".join(sub_attr)+strs[1], str(strs[3])), file=sys.stderr) 

fp.close()

#key_list = list(retd[0].keys())
key_list = list(retd.keys())
attr_num = len(key_list)


for i,k in enumerate(key_list):
    mark_num = k.count('@')
    for _ in range(mark_num, union_max):
        key_list[i] += '@'
    #print(key_list[i], file=sys.stderr) 

dbg_str = "<br>".join(key_list)

head = []
for i in range(0, union_max+1):
    head.append([""] * attr_num)
    #pprint.pprint(head)

for i,key in enumerate(key_list):
    ks = key.split('@')
    for j,k in enumerate(ks):
        #print("{},{} {}".format(i,j,k))
        head[j][i] = k

rets = ""
for i in range(0, union_max+1):
    rets += ",".join(head[i]) + "\n"
#for d in retd:
#    rets += ','.join(d.values()) + "\n"
rets += ','.join(retd.values()) + "\n"

print(rets)
print("-----")
print(dbg_str)

