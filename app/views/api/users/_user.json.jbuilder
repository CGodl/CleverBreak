json.extract! user, :id, :name, :email

json.friendIds do 
  json.array! user.friends.pluck(:id) 
end

json.billIds do 
  json.array! user.bills.pluck(:id) 
end
