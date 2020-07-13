class RemovereceiptUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :receipt_id
  end
end
