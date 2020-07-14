json.extract! user, :id, :name, :email

json.friendIds do 
  json.array! user.friends.pluck(:id) 
end

json.billIds do
  # debugger 
  json.array! user.bills.pluck(:id) 
end
