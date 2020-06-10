class Friend < ApplicationRecord


  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :friend,
    foreign_key: :friend,
    class_name: :User


end
