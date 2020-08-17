json.extract! bill, :id, :author_id, :recipient_id, :history_id, :group_id, :author_payor, :description, :cost, :updated_at, :created_at

json.commentIds do
  
  json.array! bill.comments.pluck(:id) 
end
