
@comments.each do |comment|
  json.set! comment.id do
    json.author_id comment.author_id
    json.bill_id comment.bill_id
    json.description comment.text_body
    json.updated_at comment.updated_at
    json.created_at comment.created_at
 
  end
end

