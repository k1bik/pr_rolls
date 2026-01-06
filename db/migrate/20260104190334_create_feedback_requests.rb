class CreateFeedbackRequests < ActiveRecord::Migration[8.0]
  def change
    create_table :feedback_requests do |t|
      t.string :name, null: false
      t.string :phone, null: false
      t.string :email, null: false
      t.string :comment
      t.boolean :consent, null: false

      t.timestamps
    end
  end
end
