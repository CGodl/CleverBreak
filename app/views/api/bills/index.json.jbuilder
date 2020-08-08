# //
@bills.each do |bill|
  # //
  json.set! bill.id do
    json.partial! '/api/bills/bill', bill: bill
    # json.author_id bill.author_id
    # json.author_payor bill.author_payor
    # json.description bill.description
    # json.cost bill.cost
    # json.recipient_id bill.recipient_id
    # json.updated_at bill.updated_at
    # json.created_at bill.created_at
    

  end
end

