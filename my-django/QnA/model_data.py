import csv
from QnA.models import QnA
from common.models import ValueObject, Printer, Reader
from user.models import User

class DbUploader():
    def __init__(self):
        vo = ValueObject()
        reader = Reader()
        self.printer = Printer()
        vo.context = 'QnA/data/'
        vo.fname = 'QnA.csv'
        self.csvfile = reader.new_file(vo)

        def insert_data(self):
            self.insert_QnA()
            print('##########  2  ##########')

        def insert_QnA(self):
            with open(self.csvfile, newline='', encoding='utf-8') as csvfile:
                data_reader = csv.DictReader(csvfile)
                for row in data_reader:
                    u = User()
                    user = User.objects.all().filter(user_email=row['writen']).values()[0]
                    u.id = user['id']
                    QnA.objects.create(title=row['title'],
                                       body=row['body'],
                                       writer=u,
                                       review=row['review'],
                                       update_at=row['update_at'])
                    print('QnA DATA UPLOADED  SUCCESSFUIY!')