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


data = pd.read_csv("datasets/TN_data.csv")
df = pd.DataFrame(data)


def get_distinct(col):
    li = list(set(df[col].to_list()))

    return li


print(get_distinct("Production"))
