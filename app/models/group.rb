# == Schema Information
#
# Table name: groups
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Group < ApplicationRecord

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User


end
