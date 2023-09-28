def mean(x):
  return sum(x)/len(x)
while True:
  r = input("insert a buncha of numbers seperated by ',' ")
  print(mean(r.split(',')))
