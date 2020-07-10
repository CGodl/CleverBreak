# json.partial! './api/bills/bill', bill: @bill
json.partial! `./api/bills/#{@bill.id}`, bill: @bill

# json.partial! './api/bills/bill.json.jbuilder', bill: @bill