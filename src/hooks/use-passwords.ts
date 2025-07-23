import { useState, useEffect, useCallback } from 'react';
import { dbManager, PasswordEntry } from '@/lib/db/db';
import { useToast } from '@/hooks/use-toast';

// Hook để quản lý mật khẩu
export function usePasswords() {
  const [passwords, setPasswords] = useState<PasswordEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  // Lấy tất cả mật khẩu
  const fetchPasswords = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await dbManager.getAllPasswords();
      setPasswords(data);
    } catch (err) {
      console.error('Lỗi khi lấy mật khẩu:', err);
      setError('Không thể lấy danh sách mật khẩu');
      toast({
        title: 'Lỗi',
        description: 'Không thể lấy danh sách mật khẩu',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  // Tìm kiếm mật khẩu
  const searchPasswords = useCallback(async (query: string) => {
    try {
      setLoading(true);
      setError(null);
      if (!query.trim()) {
        // Nếu query rỗng, lấy tất cả mật khẩu
        const data = await dbManager.getAllPasswords();
        setPasswords(data);
      } else {
        const data = await dbManager.searchPasswords(query);
        setPasswords(data);
      }
    } catch (err) {
      console.error('Lỗi khi tìm kiếm mật khẩu:', err);
      setError('Không thể tìm kiếm mật khẩu');
      toast({
        title: 'Lỗi',
        description: 'Không thể tìm kiếm mật khẩu',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  // Thêm mật khẩu mới
  const addPassword = useCallback(async (entry: Omit<PasswordEntry, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      const newEntry = await dbManager.addPassword(entry);
      setPasswords((prev) => [newEntry, ...prev]);
      toast({
        title: 'Đã thêm',
        description: 'Mật khẩu mới đã được thêm thành công',
      });
      return newEntry;
    } catch (err) {
      console.error('Lỗi khi thêm mật khẩu:', err);
      toast({
        title: 'Lỗi',
        description: 'Không thể thêm mật khẩu mới',
        variant: 'destructive',
      });
      throw err;
    }
  }, [toast]);

  // Cập nhật mật khẩu
  const updatePassword = useCallback(async (id: string, entry: Omit<PasswordEntry, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      const updatedEntry = await dbManager.updatePassword(id, entry);
      if (updatedEntry) {
        setPasswords((prev) =>
          prev.map((item) => (item.id === id ? updatedEntry : item))
        );
        toast({
          title: 'Đã cập nhật',
          description: 'Mật khẩu đã được cập nhật thành công',
        });
        return updatedEntry;
      }
      return null;
    } catch (err) {
      console.error('Lỗi khi cập nhật mật khẩu:', err);
      toast({
        title: 'Lỗi',
        description: 'Không thể cập nhật mật khẩu',
        variant: 'destructive',
      });
      throw err;
    }
  }, [toast]);

  // Xóa mật khẩu
  const deletePassword = useCallback(async (id: string) => {
    try {
      const success = await dbManager.deletePassword(id);
      if (success) {
        setPasswords((prev) => prev.filter((entry) => entry.id !== id));
        toast({
          title: 'Đã xóa',
          description: 'Mật khẩu đã được xóa',
          variant: 'destructive',
        });
        return true;
      }
      return false;
    } catch (err) {
      console.error('Lỗi khi xóa mật khẩu:', err);
      toast({
        title: 'Lỗi',
        description: 'Không thể xóa mật khẩu',
        variant: 'destructive',
      });
      throw err;
    }
  }, [toast]);

  // Lấy dữ liệu khi component được mount
  useEffect(() => {
    fetchPasswords();
  }, [fetchPasswords]);

  return {
    passwords,
    loading,
    error,
    fetchPasswords,
    searchPasswords,
    addPassword,
    updatePassword,
    deletePassword,
  };
}