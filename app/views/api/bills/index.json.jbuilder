# //debugger
@bills.each do |bill|
  # //debugger
  json.set! bill.id do
    json.author_id bill.author_id
    json.author_payor bill.author_payor
    json.description bill.description
    json.cost bill.cost
    json.recepient_id bill.recipient_id
    
    # json.test user.name
    # json.partial! '/api/users/user', user: bill ###
    # json.partial! '/api/bills/bill', bill: bill
  end
end

