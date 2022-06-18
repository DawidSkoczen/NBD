#s25883
import riak

myClient = riak.RiakClient(pb_port=8087) 
myBucket = myClient.bucket('s25883') 


val = {"imie":"Rafal", "nazwisko":"Skoczen", "wzrost":170, "waga":80} 

key = myBucket.new('osoba1', data = val) 
key.store() 

osoba1_link = myBucket.get('osoba1') 

print("Data from osoba key:", osoba1_link.data) 

osoba1_link.data["waga"] = 60 
osoba1_link.store() 

print("Data from osoba key after modification: ",osoba1_link.data) 

osoba1_link.delete() 

print("Try to get data after delete osoba: ",osoba1_link.data) 
