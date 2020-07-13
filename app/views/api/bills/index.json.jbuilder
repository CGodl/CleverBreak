# debugger
@bills.each do |bill|
  # debugger
  json.set! bill.id do
    # json.partial! '/api/users/user', user: bill
    json.partial! '/api/users/user', user: bill
  end
end

