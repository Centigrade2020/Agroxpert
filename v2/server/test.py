from os import fpathconf
import sqlite3
import pandas as pd

def csv_clearSpaces(path, filename):

    if "." not in filename:
        filename += ".csv"

    with open(path, "r") as f:
        raw_content = f.read().split(",")
        content = []

        for i in raw_content:
            a = ""
            l = i.split()
            for j in l:
                try:
                    j = j.capitalize()
                except:
                    pass

                a += j
            content.append(a)

        new_file_content = ""

        c = 0

        for i in content:
            if c < 7:
                new_file_content += i+","
            else:
                new_file_content += "\n"
                c = 0

            c += 1

        with open(filename, "w") as f:
            f.write(new_file_content)

data = pd.read_csv("datasets/data.csv")
df = pd.DataFrame(data)


def get_distinct(col):
    li = list(set(df[col].to_list()))
    return li


def execute_query(sql_query):
    with sqlite3.connect("datasets/data.sqlite") as conn:
        cur = conn.cursor()
        result = cur.execute(sql_query)
        conn.commit()
    return result



# for i in get_distinct("Crop"):
#     print(i)


dict1 = {"Bottle Gourd": "Anthracnose disease, leaf spots and nematode attack",
"Apple":"Apple scab, leaf spots and Black rot canker",
"Mesta": "Yellow vein mosaic disease",
"Small millets": "Downy mildew, smut disease and foot rot",  
"Carrot":"Leaf blight and severe leaf spotting",
"Black pepper": "Velvet Blight, foot rot and fusarium wilt",    
"Lab-Lab":"Bacterial leaf spot and blight",
"Rapeseed &Mustard":"Stem rot, stem canker, rust and blight",
"Pulses total":"Yellow mosaic virus, blight, leaf spot and powdery mildew",     
"Orange": "Greening disease and citrus canker",
"Potato": "Late blight, common scab, bacterial wilt and canker",
"Turnip":"Black rot and turnip mosaic",
"Turmeric":"Rhizome rot, leaf spot and leaf blotch",
"Peach":"Brown rot, peach scab and bacterial spot",
"Arhar/Tur":"Arhar mosaic virus and foliar vein yellowing",        
"Urad":"Leaf spot, powdery mildew, rust and yellow mosaic disease",
"Sunflower":"Downy mildew, sunflower necrosis and sunflower mosaic",        
"Drum Stick": "Damping off and twig canker",       
"Cucumber":"Anthracnose, downy mildew and gummy stem blight",
"Cauliflower":"Leaf spot, soft rot, cauliflower mosaic and black rot",
"Pome Granet":"Heart rot, Alternaria black spot and fruit spot",
"Other Cereals & Millets":"Downy mildew, smut disease,yellow rust, bunt and foot rot",
"Cashewnut":"Anthracnose, leaf spot and nut spot",
"Yam":"Anthracnose and yam mosaic virus",
"Redish": "Blight, rust and radish mosic",
"Gram":"Wilt, black rust and mould",
"Coriander":"Powdery mildew, wilt and stem gall ",
"Tapioca":"Mosaic disease, leaf spot and tuber rot disease",
"Arecanut":"Die back disease, bud rot and fruit rot",
"Maize":"Leaf blot, leaf spot, stalk rot and common rust",
"Samai":"Leaf blight, blast, rot and smut",
"Jute":"Stem rot, soft rot and die back",
"Niger seed":"Root rot and nest fungus attack",
"Cotton(lint)":"Leaf blight, leaf spot and streak virus ",
"Mango":"Anthracnose, powdery mildew and die back disease",
"Groundnut":"Wilt, root rot and leaf spot",
"Moong(Green Gram)":"Halo blight, tan spot and powdery mildew",
"Dry ginger":"Dry rot and nematode disease",
"Guar seed":"Bacterial blight and root/stem rot",
"Plums":"Plum pockets and blight",
"Grapes":"Grape rot, canker and botrytis",
"Brinjal":"Damping Off, blight and leaf spot",
"Wheat":"Powdery mildew, loose smut and rust",
"Other Citrus Fruit":"Citrus canker, citrus scab and gummosis",
"Ash Gourd":"Downy mildew, powdery mildew and leaf spot",
"Pineapple":"Black rot, heart rot and leaf spot",
"Ragi": "Seedling blight, foot rot and leaf spot",
"Soyabean":"Rust, leaf spot and Anthracnose",
"Pump Kin":"Powdery mildew, downy mildew and Anthracnose",
"Rice":"Rice blast, brown spot and leaf blight",
"Bhindi":"Damping off, powdery mildew and wilt",
"Varagu":"Head smut, ergot disease and rust",
"Korra":"Rust, blast and brown spot",
"Ribed Guard":"Anthracnose, powdery mildew and downy mildew",
"Banana":"Wilt, leaf spot and Anthracnose",
"Tomato":"Damping off, leaf spot and canker",
"Garlic":"Damping off, purple blotch and leaf blight",
"Horse-gram":"Leaf spot, Anthracnose and root rot",
"Total foodgrain":"Black spot, powdery mildew, downy mildew and canker",
"Pear":"Scab,seedling blight,crown gall and white root rot",
"Cabbage":"Damping off, club root of crucifers and Alternaria leaf spot.",
"Litchi":"Leaf blight and twig blight",
"Other Vegetables":"Anthracnose, leaf spot,wilt and blight",
"Cardamom":"Mosaic or marble disease, primary nursery leaf spot and capsule rot",
"Other Fresh Fruits":"Citrus decline, apple scab, mango malformation, guava wilt, fire blights, banana bunchy top and wilt, brown rots of stone fruits, crown galls, downy and powdery mildews",
"Jack Fruit":"Soft rot, die back and leaf spot.",
"Other Kharif pulses":"Blight, wilt and root rot",
"Sweet potato":"Root rot, wilt and mold rot",
"Water Melon":"Downy mildew, powdery mildew and Anthracnose",
"Tobacco":"Black shank, damping off and nematode attack",
"Ber":"Fruit rot, powdery mildew and sooty mould",
"Papaya":"Damping off, blight and powdery mildew",
"Citrus Fruit":"Citrus canker, citrus scab and gummosis",
"Sugarcane":"Red rot, wilt and grassy shoot",
"Dry chillies":"Damping off, die back and Anthracnose",
"Sesamum":"Phyllody, dry root rot and blight",
"Bajra":"Blight, leaf spot and rust",
"Beans & Mutter(Vegetable)":"Anthracnose, bean root rots, rust and blights",
"Pome Fruit":"Apple scab, fire blight, pear scab and powdery mildew",
"Jowar":"Head smut,covered kernel smut, long smut and downy mildew",
"Snak Guard":"Leaf spot, stem blight and leaf spot",
"Sannhamp":"Severe leaf distortion",
"Coconut":"Leaf spot, Anthracnose and bitten leaf",
"Onion":"Damping off, leaf blot and bacterial blight",
"Beet Root":"Leaf spot, curly top and beet mosaic",
"Castor seed":"Wilting of plants, root degeneration, collar rot, drooping of leaves and necrosis",
"Bitter Gourd":"Yellow mosaic virus, wilt, leaf spot and root knot",
"Crop": "Potential Pests"}

# print(execute_query("SELECT name FROM sqlite_temp_master WHERE type='table';").fetchall())

# Dont try to delete sql file.. Ill kill you.. Bye.. Gud night



with open("datasets/data.csv", "r") as f:
    rows0 = f.read().split("\n")
    rows = []
    new_rows = []
    for i in rows0:
        rows.append(i.split(","))
    
    for i in rows:
        new_rows.append(i + [ f'"{dict1[i[4]]}"'])

    content = ""

    for i in new_rows:
        a = ",".join(i)
        a += "\n"
        content += a
    

    with open("data.csv", "w") as f:
        f.write(content)
        print(content)
        














