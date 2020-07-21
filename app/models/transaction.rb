# == Schema Information
#
# Table name: transactions
#
#  id         :bigint           not null, primary key
#  bill_id    :integer          not null
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Transaction < ApplicationRecord



end
