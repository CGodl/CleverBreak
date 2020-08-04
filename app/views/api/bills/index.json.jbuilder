# //debugger
@bills.each do |bill|
  # //debugger
  json.set! bill.id do
    json.author_id bill.author_id
    json.author_payor bill.author_payor
    json.description bill.description
    json.cost bill.cost
    json.recipient_id bill.recipient_id
    json.updated_at bill.updated_at
    json.created_at bill.created_at
    
    # json.test user.name
    # json.partial! '/api/users/user', user: bill ###
    # json.partial! '/api/bills/bill', bill: bill
  end
end

