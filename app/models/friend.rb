class Friend < ApplicationRecord
  validates :requestor_id, :requested_id, presence: true


  belongs_to :requestor,
    foreign_key: :requestor_id,
    class_name: :User

  belongs_to :requested,
    foreign_key: :requested_id,
    class_name: :User


end
