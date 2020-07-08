# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  bill_id    :integer          not null
#  text_body  :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Comment < ApplicationRecord


  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User




end
